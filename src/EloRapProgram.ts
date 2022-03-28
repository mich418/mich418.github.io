import Program, { PropsList } from "./Program";
import I18n from './I18n'

class EloRapProgram extends Program {
  private rapList: string[] = [
    'https://www.youtube.com/watch?v=F86i8gPgquI'
  ]

  constructor(i18n: I18n) {
    super('elorap', i18n)
  }

  protected async runCallback(): Promise<{ err: string; data?: any; }> {
    const randomIndex = Math.round(Math.random() * this.rapList.length)
    return {err: null, data: `Check this one: [link=${this.rapList[randomIndex]}]${this.rapList[randomIndex]}[/link]`}
  }
}

export default EloRapProgram