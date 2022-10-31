import Program, { DataObject } from "./Program";
import I18n from './I18n'
import Dialog from './Dialog'
import mkInfoImg from './assets/mk_info_img.jpeg'


class AboutProgram extends Program {
  private classNames = {
    main: 'about',
    image: 'about__image',
    text: 'about__text'
  }

  constructor(i18n: I18n) {
    super({
      mainCommand: 'about',
      description: i18n.key('help.aboutProgram.description'),
      i18n
    })
  }

  private getContent(): HTMLDivElement {
    const mainWrapper = document.createElement('div')
    mainWrapper.classList.add(this.classNames.main)

    const image = document.createElement('img')
    image.classList.add(this.classNames.image)
    image.src = mkInfoImg

    const text = document.createElement('p')
    text.classList.add(this.classNames.text)
    text.innerText = this.i18n.key('about.text')

    mainWrapper.appendChild(image)
    mainWrapper.appendChild(text)

    return mainWrapper
  }

  protected async runCallback(): Promise<{ err: string; data?: any; }> {
    const dialog = new Dialog(
      this.getContent(),
      {
        name: 'About',
        width: 600,
        buttonOk: this.i18n.key('button.close')
      }
    )
    await dialog.open()
    return {err: null}
  }

  help(): DataObject {
    return {
      print: {
        type: 'print',
        output: this.i18n.key('help.aboutProgram.detailedDescription')
      }
    }
  }
}

export default AboutProgram