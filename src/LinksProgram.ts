import Program, {DataObject, RunResult} from './Program'
import I18n from './I18n'

class LinksProgram extends Program {
  constructor(i18n: I18n) {
    super({
      mainCommand: 'links',
      description: i18n.key('help.linksProgram.description'),
      i18n
    })
  }

  help(): DataObject {
    return {
      print: {
        type: 'print',
        output: this.i18n.key('help.linksProgram.detailedDescription')
      }
    }
  }

  protected async runCallback(): Promise<RunResult> {
    const links = [
      {
        key: 'linkedin:',
        description: '[link=https://www.linkedin.com/in/mihauco]linkedin.com/in/mihauco[/link]'
      },
      {
        key: 'twitter:',
        description: '[link=https://twitter.com/mihauco]twitter.com/mihauco[/link]'
      },
      {
        key: 'github:',
        description: '[link=https://github.com/mihauco]github.com/mihauco[/link]'
      }
    ]

    return {err: null, data: {print: {type: 'printKeyDescription', output: links}}}
  }
}

export default LinksProgram