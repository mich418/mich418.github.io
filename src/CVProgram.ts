import Program, {DataObject, RunResult} from './Program'
import I18n from './I18n'

class CVProgram extends Program {
  constructor(i18n: I18n) {
    super({
      mainCommand: 'cv',
      description: i18n.key('help.cvProgram.description'),
      i18n
    })
  }

  help(): DataObject {
    return {
      print: {
        type: 'print',
        output: this.i18n.key('help.cvProgram.detailedDescription')
      }
    }
  }

  protected async runCallback(): Promise<RunResult> {
    return {
      data: {
        print: {
          type: 'print',
          output: this.i18n.key('help.cvProgram.downloadInfo')
        }
      }
    }
  }

  private downloadCV() {
    const link = document.createElement('a')
    link.style.display = 'none'
    link.target="_blank"
    link.href = null
    link.download = "xxx.pdf"

    document.body.appendChild(link)
    link.click()

    setTimeout(() => {
      link.remove()
    }, 100)
  }
}

export default CVProgram

