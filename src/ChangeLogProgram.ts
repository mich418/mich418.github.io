import Program, {DataObject, RunResult} from './Program'
import I18n from './I18n'
import changelog from '../changelog.md'

class ChangeLogProgram extends Program {
  constructor(i18n: I18n) {
    super({
      mainCommand: 'changelog',
      description: i18n.key('help.changelog.description'),
      i18n
    })
  }

  help(): DataObject {
    return {
      print: {
        type: 'print',
        output: this.i18n.key('help.changelog.detailedDescription')
      }
    }
  }

  protected async runCallback(): Promise<RunResult> {
    return {
      data: {
        print: {
          type: 'print',
          output: this.getFormattedChangelog()
        }
      }
    }
  }

  /*
    TODO:
    This method is a mess, make it better 
  */
  private getFormattedChangelog(): string[] {
    const linksMatch = changelog.match(/\[\d.\d.\d\]:.+/gm)

    const versionLinks: {[version: string]: string} = Array.isArray(linksMatch)
      ? linksMatch.reduce((linksAgg: {[version: string]: string}, linkLine) => {
        if (typeof linkLine === 'string') {
          const lineSplitted = linkLine.split(': ')

          if (lineSplitted.length === 2) {
            linksAgg[lineSplitted[0]] = lineSplitted[1]
          }
        }

        return linksAgg
      }, {})
      : {}
    
    const changelogInLines = changelog.replace(/\[\d.\d.\d\]:.+/gm, '')
      .replace(/\n/g, '<nl>')
      .replace(/^#.+?#/, '#')
      .replace(/#{1,}/g, '')
      .split('<nl>')
      .filter(line => line.trim())
      .map((line, index) => {
        line = line.trim()
        const versionMatch = line.match(/\[\d.\d.\d\]/)

        if (versionMatch && versionLinks[versionMatch[0]]) {
          line = line.replace(
            /\[\d.\d.\d\]/,
            `[link=${versionLinks[versionMatch[0]]}]${versionMatch[0].replace(/\[|\]/g, '')}[/link]`
          )
        }

        if (line.match(/^[a-zA-Z]/)) {
          line = `&nbsp;&nbsp;${line}`
        } else if (line.match(/^-/)) {
          line = `&nbsp;&nbsp;&nbsp;&nbsp;${line}`
        } else if (index > 0) {
          line = `<br/>${line}`
        }

        return line
      })

    return changelogInLines
  }
}

export default ChangeLogProgram