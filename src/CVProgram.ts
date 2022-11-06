import Program, {DataObject, RunResult} from './Program'
import I18n from './I18n'
import CVpdf from './assets/michal_koczkodon_cv_06-Nov-2022.pdf'

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
      },
      question: {
        text: this.i18n.key('help.cvProgram.downloadProceed'),
        callback: () => {
          this.downloadCV()
          return {}
        }
      }
    }
  }

  private downloadCV() {
    const link = document.createElement('a')
    link.style.display = 'none'
    link.target="_blank"
    link.href = CVpdf
    link.download = "michal_koczkodon_cv_06-Nov-2022.pdf"

    document.body.appendChild(link)
    link.click()

    setTimeout(() => {
      link.remove()
    }, 100)
  }
}

export default CVProgram

