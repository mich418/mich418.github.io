import Program from "./Program";
import I18n from './I18n'


interface ThemesList {
  [name: string]: string
}

interface OptionsPropsList {
  theme?: string,
  lang?: string
}

class OptionsProgram extends Program {
  private themes: ThemesList = {
    light: 'theme-light',
    dark: 'theme-dark'
  }

  private langs: string[] = ['en', 'pl'] 

  constructor(i18n: I18n) {
    super(
      'options',
      i18n,
      {
        theme: {
          type: 'string'
        },
        lang: {
          type: 'string'
        }
      }
    )
  }

  protected async runCallback(propsList: OptionsPropsList): Promise<{err: string | null}> {
    if (propsList.theme || propsList.lang) {
      
      if (propsList.theme) {
        if (this.themes[propsList.theme]) {
          this.changeTheme(propsList.theme)
        } else {
          return {err:  this.i18n.key('options.unknownThemeError', propsList.theme)}
        }
      }

      // if (propsList.lang) {
      //   return {err: null}
      // }
    } else {
      return {err: 'You need to provide --theme and/or --lang values.'}
    }

    return {err: null}
  }

  private changeTheme(theme: string): null | string {
    if (this.themes[theme]) {
      document.body.className = document.body.className.replace(/theme-.+?(\s|$)/, `${this.themes[theme]}$1`)
      return null
    }

    return `Unknown theme '${theme}'`
  }

  private changeLang(theme: string): null | string {
    return null
  }
}

export default OptionsProgram