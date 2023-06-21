import Program, { DataObject, RunResult } from "./Program";
import I18n from './I18n'
import Dialog from './Dialog'

class PrivacyPolicyProgram extends Program {
  private classNames = {
    main: 'privacy-policy',
  }

  constructor(i18n: I18n) {
    super({
      mainCommand: 'privacy-policy',
      description: i18n.key('help.privacyPolicyProgram.description'),
      i18n
    })
  }

  help(): DataObject {
    return {
      print: {
        type: 'print',
        output: this.i18n.key('help.privacyPolicyProgram.detailedDescription')
      }
    }
  }

  bindPrivacyLink() {
    const helloLink = document.querySelector('a[href="#privacy-policy"]')

    console.log(helloLink);

    if (helloLink) {
      helloLink.addEventListener('click', (event) => {
        event.preventDefault()
        this.showDialog()
      })
    }
  }

  protected async runCallback(): Promise<RunResult> {
    await this.showDialog()
    return {err: null}
  }

  private async showDialog() {
    const dialog = new Dialog(
      this.getContent(),
      {
        name: this.i18n.key('privacyPolicy.title'),
        width: 600,
        buttonOk: this.i18n.key('button.close')
      }
    )
    
    await dialog.open()
  }

  private getContent(): HTMLDivElement {
    const content = document.createElement('div')
    content.classList.add(this.classNames.main)
    content.innerHTML = this.i18n.key('privacyPolicy.text')

    return content
  }
}

export default PrivacyPolicyProgram