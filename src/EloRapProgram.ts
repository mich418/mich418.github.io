import Program, { DataObject, RunResult } from "./Program";
import I18n from './I18n'

class EloRapProgram extends Program {
  private rapList: string[] = [
    'https://www.youtube.com/watch?v=F86i8gPgquI',
    'https://www.youtube.com/watch?v=GbAHs3Bs8I4',
    'https://www.youtube.com/watch?v=H30R1BUpRF8',
    'https://www.youtube.com/watch?v=DDZFSRBCSdo'
  ]

  constructor(i18n: I18n) {
    super({
      mainCommand: 'elorap',
      i18n
    })
  }

  protected async runCallback(): Promise<RunResult> {
    const randomIndex = Math.round(Math.random() * (this.rapList.length - 1))

    return {
      data: {
        print: {
          type: 'print',
          output: this.i18n.key('elorap.text1', this.rapList[randomIndex])
        }
      }
    }
  }

  help(): DataObject {
    return {
      print: {
        type: 'print',
        output: this.i18n.key('help.elorapProgram.detailedDescription')
      }
    }
  }
}

export default EloRapProgram