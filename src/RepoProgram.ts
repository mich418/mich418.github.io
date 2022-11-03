import Program, {DataObject, RunResult} from './Program'
import I18n from './I18n'

class RepoProgram extends Program {
  constructor(i18n: I18n) {
    super({
      mainCommand: 'repo',
      description: i18n.key('help.repo.description'),
      i18n
    })
  }

  help(): DataObject {
    return {
      print: {
        type: 'print',
        output: this.i18n.key('help.repo.detailedDescription')
      }
    }
  }

  protected async runCallback(): Promise<RunResult> {
    window.open('https://github.com/mihauco/mihauco.github.io', '_blank')

    return {
      data: {
        print: {
          type: 'print',
          output: this.i18n.key('repo.didnOpenMessage', 'https://github.com/mihauco/mihauco.github.io')
        }
      }
    }
  }
}

export default RepoProgram