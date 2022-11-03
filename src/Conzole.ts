import {sleep, objectHasOwnProperty} from './helpers/helpers'

interface ClassNames {
  main: string,
  line: string,
  lineWithQuestion: string,
  lineUserInput: string,
  lineUserInputActive: string,
  userInput: string,
  subline: string,
  link: string,
  question: string
}

type inputHandler = (inputText: string) => void

interface lazyPrintOptions {
  pauseMaxTime: number,
  pauseMinTime?: number
}

interface KeyDescription {
  key: string,
  description: string
}

class Conzole {
  private mainElement: HTMLElement
  private classNames: ClassNames
  private busy = false
  private inputHandlers: inputHandler[] = []
  private history: string[] = []
  private histroyIndex = -1
  private beforeHistroyInput = ''
  private currentActiveLine: HTMLTextAreaElement | null = null
  private speedUpLazyPrint = false

  constructor(el: HTMLElement, namespace = 'conzole') {
    this.mainElement = el
    this.createClassNames(namespace)
    this.prepareMainElement()
  }

  async print(output: string | string[], lazy: boolean | lazyPrintOptions = false, classModifier?: string) {
    if (this.busy) throw(new Error('Conzole is busy right now'))

    this.busy = true
    const line = this.createNewLine(classModifier)
    const linesToPrint = typeof output === 'string' ? [output] : [...output]
    const keyListener = lazy 
      ? (event: KeyboardEvent) =>  {
        if (event.key === ' ') {
          this.speedUpLazyPrint = true
        }
      }
      : null

    if (keyListener) {
      document.body.addEventListener('keyup', keyListener)
    }

    for (let lineToPrint of linesToPrint) {
      const subline = this.createNewSublineElement()
      line.appendChild(subline)

      if (lazy) {
        await this.printLazy(subline, lineToPrint, typeof lazy === 'object' ? lazy : undefined)
        if (!this.speedUpLazyPrint) await sleep(100)
      } else {
        const linksMatch = lineToPrint.match(/\[link=.*?].*?\[\/link\]/g)

        if (linksMatch) {
          for (const linkMatch of linksMatch) {
            const [, linkHref, linkText] = linkMatch.match(/\[link=(.*?)](.*?)\[\/link\]/)
            lineToPrint = lineToPrint.replace(linkMatch, `<a class="${this.classNames.link}" href="${linkHref}" target="_blank">${linkText}</a>`)
          }
        }

        subline.innerHTML = lineToPrint
      }
    }

    if (keyListener) {
      document.body.removeEventListener('keyup', keyListener)
      this.speedUpLazyPrint = false
    }

    this.busy = false
  }

  async printKeyDescriptionList(keyDescriptionList: KeyDescription[], minSpace = 3) {
    const linesToPrint: string[] = []
    let longestKeyLength = 0

    for (const keyDescription of keyDescriptionList) {
      if (keyDescription.key.length > longestKeyLength) {
        longestKeyLength = keyDescription.key.length
      }
    }

    for (const keyDescription of keyDescriptionList) {
      const space = minSpace + (longestKeyLength - keyDescription.key.length)
      linesToPrint.push(`${keyDescription.key}${new Array(space).fill('&nbsp;').join('')}${keyDescription.description}`)
    }

    await this.print(linesToPrint)
  }

  async input() {
    this.currentActiveLine = this.createNewInputLine()

    const keyUpListener = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        const inputText = this.currentActiveLine.value
        const subline = this.createNewSublineElement()

        this.currentActiveLine.parentElement.classList.remove(this.classNames.lineUserInputActive)
        subline.innerText = inputText
        this.currentActiveLine.parentElement.appendChild(subline)
    
        this.currentActiveLine.removeEventListener('keyup', keyUpListener)
        this.currentActiveLine.remove()

        this.addToHistory(inputText)
        this.resetHistoryActions()

        if (inputText.trim()) {
          this.executeInputHandlers(inputText)
        } else {
          this.input()
        }
      } else if (event.key === 'ArrowUp') {
        this.goToPrevInHistory()
      } else if (event.key === 'ArrowDown') {
        this.goToNextInHistory()
      } else {
        this.histroyIndex = -1
      }
    }

    this.currentActiveLine.addEventListener('keyup', keyUpListener)
    this.currentActiveLine.focus()
  }

  question(question: string): Promise<string> {
    const questionLine = `${question}: `
    this.currentActiveLine = this.createNewInputLine()
    this.currentActiveLine.value = questionLine

    return new Promise((resolve) => {
      const inputListener = () => {
        if (this.currentActiveLine.value.length < questionLine.length) {
          this.currentActiveLine.value = questionLine
        }
      }

      const keyUpListener = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
          const inputText = this.currentActiveLine.value
          const subline = this.createNewSublineElement()
  
          this.currentActiveLine.parentElement.classList.remove(this.classNames.lineUserInputActive)
          subline.innerText = inputText
          this.currentActiveLine.parentElement.appendChild(subline)
      
          this.currentActiveLine.removeEventListener('keyup', keyUpListener)
          this.currentActiveLine.removeEventListener('input', inputListener)
          this.currentActiveLine.remove()
  
          resolve(inputText.replace(questionLine, '').trim())
        }
      }

      this.currentActiveLine.addEventListener('keyup', keyUpListener)
      this.currentActiveLine.addEventListener('input', inputListener)
      this.currentActiveLine.focus()
    })
  }

  focus() {
    if (this.currentActiveLine) {
      this.currentActiveLine.focus()
    }
  }

  onInput(callback: inputHandler) {
    this.inputHandlers.push(callback)
  }

  private createClassNames(namespace: string) {
    this.classNames = {
      main: `${namespace}`,
      line: `${namespace}__line`,
      lineWithQuestion: `${namespace}__line--with-question`,
      lineUserInput: `${namespace}__line--user-input`,
      lineUserInputActive: `${namespace}__line--user-input-active`,
      userInput: `${namespace}__user-input`,
      subline: `${namespace}__subline`,
      link: `${namespace}__link`,
      question: `${namespace}__question`
    }
  }

  private prepareMainElement() {
    this.mainElement.classList.add(this.classNames.main)
    this.mainElement.innerHTML = ''
  }

  private createNewLine(classModifier?: string): HTMLDivElement {
    const line = document.createElement('div');

    line.classList.add(this.classNames.line)

    if (classModifier) {
      line.classList.add(`${this.classNames.line}--${classModifier}`)
    }

    this.mainElement.appendChild(line)

    return line
  }

  private createNewInputLine(): HTMLTextAreaElement {
    const line = this.createNewLine()
    const userInput = document.createElement('textarea')
    userInput.spellcheck = false
    userInput.autocapitalize = 'off'

    line.classList.add(this.classNames.lineUserInput)
    line.classList.add(this.classNames.lineUserInputActive)
    userInput.classList.add(this.classNames.userInput)

    line.appendChild(userInput)

    return userInput
  }

  private createNewSublineElement(): HTMLElement {
    const subline = document.createElement('span')
    subline.classList.add(this.classNames.subline)

    return subline
  }

  private async printLazy(element: Element, text: string, lazyPrintOptions: lazyPrintOptions) {
    const options = lazyPrintOptions
      ? lazyPrintOptions
      : {pauseMaxTime: 70, pauseMinTime: 10}

    const inTextPauses: {[position: number]: number} = {}
    let match: null | RegExpMatchArray;

    while ((match = text.match(/\[\d+]/)) !== null) {
      inTextPauses[match.index] = Number(match[0].replace(/\[|]/g, ''))
      text = text.replace(match[0], '')
    }

    const textSplitted = text.split('')
    let printedText = ''

    for (let i = 0; i < textSplitted.length; i++) {
      if (inTextPauses[i] && !this.speedUpLazyPrint) {
        await sleep(inTextPauses[i])
      }

      if (!this.speedUpLazyPrint) {
        const time = !objectHasOwnProperty(options, 'pauseMinTime')
          ? options.pauseMaxTime 
          : Math.round((Math.random() * (options.pauseMaxTime - options.pauseMinTime)) + options.pauseMinTime)

        await sleep(this.speedUpLazyPrint ? 0 : time)
      }

      printedText += textSplitted[i]
      element.innerHTML = printedText
    }
  }

  private executeInputHandlers(inputText: string) {
    for (const inputHandler of this.inputHandlers) {
      inputHandler(inputText)
    }
  }

  private addToHistory(inputText: string) {
    this.history.unshift(inputText.replace(/\n$/, ''))
  }

  private goToPrevInHistory() {
    if (this.history.length) {
      if (this.histroyIndex < 0) {
        this.beforeHistroyInput = this.currentActiveLine.value
      }

      if (this.histroyIndex + 1 < this.history.length) {
        this.histroyIndex += 1
        this.currentActiveLine.value = this.history[this.histroyIndex]
      } else {
        this.histroyIndex = -1
        this.currentActiveLine.value = this.beforeHistroyInput
      }
    }

    this.moveCursorAtTheEnd()
  }

  private goToNextInHistory() {
    if (this.histroyIndex > -1) {
      if (this.histroyIndex === 0) {
        this.histroyIndex = -1
        this.currentActiveLine.value = this.beforeHistroyInput
      } else {
        this.histroyIndex -= 1
        this.currentActiveLine.value = this.history[this.histroyIndex]
      }
    }

    this.moveCursorAtTheEnd()
  }

  private moveCursorAtTheEnd() {
    const valueLength = this.currentActiveLine.value.length
    this.currentActiveLine.setSelectionRange(valueLength, valueLength)
  }

  private resetHistoryActions() {
    this.histroyIndex = -1
    this.beforeHistroyInput = ''
  }
}

export default Conzole