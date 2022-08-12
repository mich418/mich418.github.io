import Program, { PropsList } from "./Program";
import I18n from './I18n'
import Dialog from './Dialog'

class AboutProgram extends Program {
  constructor(i18n: I18n) {
    super('about', i18n)
  }

  protected async runCallback(): Promise<{ err: string; data?: any; }> {
    const dialog = new Dialog(
      'Something about me',
      {
        buttonOk: this.i18n.key('button.close')
      }
    )
    await dialog.open()
    return {err: null}
  }
}

export default AboutProgram