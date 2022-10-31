import Conzole from './Conzole'
import I18n from './i18n'
import logo from './logo'
import translations from './translations.json'
import Program from './Program'
import OptionsProgram from './OptionsProgram'
import AboutProgram from './AboutProgram'
import LinksProgram from './LinksProgram'
import EloRapProgram from './EloRapProgram'
import HelpProgram from './HelpProgram'
import CVProgram from './CVProgram'
import optionsManager from './OptionsManager'

class MKInfo {
  private mainEl: HTMLElement
  private conzole: Conzole
  private i18n: I18n
  private lang: string
  private programs: Program[]

  constructor(mainEl: HTMLElement) {
    optionsManager.setInitialTheme()
    this.mainEl = mainEl
    this.mainEl.innerHTML = ''
    this.conzole = new Conzole(this.mainEl, 'mk-info')
    this.lang = this.getLang()
    this.i18n = new I18n(translations, this.lang, 'en')
    this.programs = [
      new OptionsProgram(this.i18n),
      new AboutProgram(this.i18n),
      new LinksProgram(this.i18n),
      new EloRapProgram(this.i18n),
      new CVProgram(this.i18n)
    ]
    
    this.programs.push(
      new HelpProgram(this.i18n, this.programs)
    )
  }

  async start() {
    await this.printLogo()
    await this.conzole.print('')
    await this.printHelloMessage()

    this.bindInputEvents()
    this.bindAutoFocusToActiveLineEvent()

    this.conzole.input()
  }

  private getLang(): string {
    return optionsManager.setInitialLang()
  }

  private async printLogo() {
    const logoLines = logo.split('\n').filter(line => !!line.length)
    let belowLogoInfo: string | string[] = 'v1.0.0|© 2022 Michal Koczkodon'
    let longestLogoLine = -1

    for (let line of logoLines) {
      if (line.length > longestLogoLine) longestLogoLine = line.length
      await this.conzole.print(line, {pauseMaxTime: 3})
    }

    const belowLogoInfoSpaceLength = longestLogoLine - belowLogoInfo.length + 1

    if (belowLogoInfoSpaceLength > 0) {
      belowLogoInfo = belowLogoInfo.replace('|', new Array(belowLogoInfoSpaceLength).fill('&nbsp;').join(''))
    } else {
      belowLogoInfo.split('|')
    }

    await this.conzole.print(belowLogoInfo)
  }

  private async printHelloMessage() {
    const helloMessage = [
      this.i18n.key('helloText'),
      this.i18n.key('helloHelpInfo')
    ]
  
    await this.conzole.print(helloMessage, true)
  }

  private bindInputEvents() {
    this.conzole.onInput(async (inputText) => {
      const mainCommand = inputText.trim().match(/^.+?(\s|$)/)[0]?.trim() || '';
      const programToRun = this.programs.find(program => program.getMainCommand() === mainCommand)

      if (programToRun) {
        await this.runProgram(programToRun, inputText)
      } else {
        await this.conzole.print(this.i18n.key('unknownProgram', mainCommand))
      }

      this.conzole.input()
    })
  }

  private async runProgram(program: Program, input: string) {
    let run = true
    let result = await program.run(input.replace(/^.+?(\s|$)/, ''))
    
    while (run) {
      if (!result.question) {
        run = false
      }

      if (result.err) {
        await this.conzole.print(result.err)
      }
  
      if (result.data) {
        if (typeof result.data === 'string') {
          await this.conzole.print(result.data)
        } else {
          if (result.data.print) {
            const printDataArray = Array.isArray(result.data.print) ? result.data.print : [result.data.print]
  
            for (const printData of printDataArray) {
              if (printData.type === 'printLazy') {
                await this.conzole.print(printData.output, true)
              } else if (printData.type === 'printKeyDescription') {
                await this.conzole.printKeyDescriptionList(printData.output)
              } else {
                await this.conzole.print(printData.output)
              }
            }
          }
        }
      }

      if (result.question) {
        const response = await this.conzole.question(result.question.text)
        result = result.question.callback(response)
      }
    }
  }

  bindAutoFocusToActiveLineEvent() {
    document.body.addEventListener('click', () => {
      this.conzole.focus()
    })
  }
}

export default MKInfo