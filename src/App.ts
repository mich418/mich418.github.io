import Conzole from './Conzole'
import I18n from './i18n'
import logo from './logo'
import translations from './translations.json'

class App {
  private mainEl: HTMLElement
  private conzole: Conzole
  private i18n: I18n
  private lang: string

  constructor(mainEl: HTMLElement) {
    this.mainEl = mainEl
    this.mainEl.innerHTML = ''
    this.conzole = new Conzole(this.mainEl, 'mk-info')
    this.lang = this.getLang()
    this.i18n = new I18n(translations, this.lang, 'en')
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

      if (inputText.trim() === 'elorap') {
        await this.elorap()
      }

      this.conzole.input()
    })
  }

  private async elorap() {
    await this.conzole.print('Try this one: [link=https://www.youtube.com/watch?v=F86i8gPgquI]https://www.youtube.com/watch?v=F86i8gPgquI[/link]')
  }
}

export default App