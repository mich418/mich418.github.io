import {sleep} from './helpers'

interface ClassNames {
  main: string,
  line: string,
  lineUserInput: string,
  lineUserInputActive: string,
  userInput: string,
  subline: string,
  link: string
}

type inputHandler = (inputText: string) => void

interface lazyPrintOptions {
  pauseMaxTime: number,
  pauseMinTime?: number
}

class Conzole {
  private mainElement: HTMLElement
  private classNames: ClassNames
  private busy: boolean = false
  private inputHandlers: inputHandler[] = []
  private history: string[] = []
  private histroyIndex: number = -1
  private beforeHistroyInput: string = ''

  constructor(el: HTMLElement, namespace: string = 'conzole') {
    this.mainElement = el
    this.createClassNames(namespace)
    this.prepareMainElement()
  }

  private createClassNames(namespace: string) {
    this.classNames = {
      main: `${namespace}`,
      line: `${namespace}__line`,
      lineUserInput: `${namespace}__line--user-input`,
      lineUserInputActive: `${namespace}__line--user-input-active`,
      userInput: `${namespace}__user-input`,
      subline: `${namespace}__subline`,
      link: `${namespace}__link`
    }
  }

  private prepareMainElement() {
    this.mainElement.classList.add(this.classNames.main)
    this.mainElement.innerHTML = ''
  }

  private createNewLine(): HTMLDivElement {
    const line = document.createElement('div');

    line.classList.add(this.classNames.line)

    this.mainElement.appendChild(line)

    return line
  }

  private createNewInputLine(): HTMLTextAreaElement {
    const line = this.createNewLine()
    const userInput = document.createElement('textarea')

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
      if (inTextPauses[i]) {
        await sleep(inTextPauses[i])
      }

      const time = !options.hasOwnProperty('pauseMinTime')
        ? options.pauseMaxTime 
        : Math.round((Math.random() * (options.pauseMaxTime - options.pauseMinTime)) + options.pauseMinTime)

      await sleep(time)

      printedText += textSplitted[i]
      element.innerHTML = printedText
    }
  }

  private executeInputHandlers(inputText: string) {
    for (let inputHandler of this.inputHandlers) {
      inputHandler(inputText)
    }
  }

  async print(output: string | string[], lazy: boolean | lazyPrintOptions = false) {
    if (this.busy) throw(new Error('Conzole is busy right now'))

    this.busy = true
    const line = this.createNewLine()
    const linesToPrint = typeof output === 'string' ? [output] : [...output]

    for (let lineToPrint of linesToPrint) {
      const subline = this.createNewSublineElement()
      line.appendChild(subline)

      if (lazy) {
        await this.printLazy(subline, lineToPrint, typeof lazy === 'object' ? lazy : undefined)
        await sleep(100)
      } else {
        const linksMatch = lineToPrint.match(/\[link=.*?].*?\[\/link\]/g)

        if (linksMatch) {
          for (let linkMatch of linksMatch) {
            const [, linkHref, linkText] = linkMatch.match(/\[link=(.*?)](.*?)\[\/link\]/)
            lineToPrint = lineToPrint.replace(linkMatch, `<a class="${this.classNames.link}" href="${linkHref}" target="_blank">${linkText}</a>`)
          }
        }

        subline.innerHTML = lineToPrint
      }
    }

    this.busy = false
  }

  private addToHistory(inputText: string) {
    this.history.push(inputText)
  }

  private goToPrevInHistory() {

  }

  private goToNextInHistory() {
    
  }

  private resetHistoryActions() {
    this.histroyIndex = -1
    this.beforeHistroyInput = ''
  }

  async input() {
    const line = this.createNewInputLine()

    const keyUpListener = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        const inputText = line.value
        const subline = this.createNewSublineElement()

        line.parentElement.classList.remove(this.classNames.lineUserInputActive)
        subline.innerText = inputText
        line.parentElement.appendChild(subline)
    
        line.removeEventListener('keyup', keyUpListener)
        line.remove()

        this.addToHistory(inputText)
        this.resetHistoryActions()

        if (inputText.trim()) {
          this.executeInputHandlers(inputText)
        } else {
          this.input()
        }
      } else if (event.key === 'ArrowUp') {
        
      } else if (event.key === 'ArrowDown') {
        
      } else {
        this.histroyIndex === -1
      }
    }

    line.addEventListener('keyup', keyUpListener)
    line.focus()
  }

  onInput(callback: inputHandler) {
    this.inputHandlers.push(callback)
  }
}

export default Conzole