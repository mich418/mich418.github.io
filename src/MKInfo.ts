import Conzole from './Conzole'
import I18n from './i18n'
import logo from './logo'
import translations from './translations.json'
import Program from './Program'
import OptionsProgram from './OptionsProgram'
import EloRapProgram from './EloRapProgram'

class MKInfo {
  private mainEl: HTMLElement
  private conzole: Conzole
  private i18n: I18n
  private lang: string
  private programs: Program[]

  constructor(mainEl: HTMLElement) {
    this.mainEl = mainEl
    this.mainEl.innerHTML = ''
    this.conzole = new Conzole(this.mainEl, 'mk-info')
    this.lang = this.getLang()
    this.i18n = new I18n(translations, this.lang, 'en')
    this.programs = [
      new OptionsProgram(this.i18n),
      new EloRapProgram(this.i18n)
    ]
  }

  async start() {
    await this.printLogo()
    await this.conzole.print('')
    await this.printHelloMessage()

    this.bindInputEvents()

    this.conzole.input()
  }

  private getLang(): string {
    const langHashMatch = window.location.hash.match(/lang=(.+)/)
    return langHashMatch ? langHashMatch[1] : 'en'
  }

  private async printLogo() {
    const logoLines = logo.split('\n').filter(line => !!line.length)
    let belowLogoInfo: string | string[] = 'v1.0.0|© 2022 Michal Koczkodon'
    let longestLogoLine = -1

    for (let line of logoLines) {
      if (line.length > longestLogoLine) longestLogoLine = line.length
      await this.conzole.print(line, {pauseMaxTime: 5})
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
        const result = await programToRun.run(inputText.replace(/^.+?(\s|$)/, ''))
        
        if (result.err) {
          await this.conzole.print(result.err)
        }

        if (typeof result.data === 'string') {
          await this.conzole.print(result.data)
        }
      } else {
        await this.conzole.print(this.i18n.key('unknownProgram', mainCommand))
      }

      this.conzole.input()
    })
  }
}

export default MKInfo