import Program, { DataObject, RunResult } from "./Program";
import I18n from './I18n'
import optionsManager from './OptionsManager'

interface ThemesList {
  [name: string]: string
}

interface LanguagesList {
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

  private langs: LanguagesList = {
    en: 'en',
    pl: 'pl'
  }

  constructor(i18n: I18n) {
    super({
      mainCommand: 'options',
      description: i18n.key('help.optionsProgram.description'),
      i18n,
      propsConfig: {
        theme: {
          type: 'string'
        },
        lang: {
          type: 'string'
        }
      }
    })
  }

  help(): DataObject {
    return {
      print: [
        {type: 'print', output: this.i18n.key('help.optionsProgram.title', this.mainCommand)},
        {type: 'printKeyDescription', output: [
          {
            key: `${this.mainCommand} --theme [${this.i18n.key('help.optionsProgram.themeName')}]`,
            description: this.i18n.key('help.optionsProgram.themeOptionDescription')
          },
          {
            key: `${this.mainCommand} --lang [${this.i18n.key('help.optionsProgram.languageCode')}]`,
            description: this.i18n.key('help.optionsProgram.langOptionDescription')
          }
        ]}
      ]
    }
  }

  protected async runCallback(propsList: OptionsPropsList): Promise<RunResult> {
    if (propsList.theme || propsList.lang) {
      
      if (propsList.theme) {
        const changeThemeError = this.changeTheme(propsList.theme)

        if (changeThemeError) {
          return {
            err: changeThemeError
          }
        }
      }

      if (propsList.lang) {
        const changeLangError = this.changeLang(propsList.lang)

        if (changeLangError) {
          return {
            err: changeLangError
          }
        } else {
          return {
            question: {
              text: this.i18n.key('options.resetToChangeLang'),
              callback: (answer: string) => {
                if (!answer || answer.toLocaleLowerCase() === 'y' || answer.toLocaleLowerCase() === 't') {
                  // eslint-disable-next-line
                  window.location.href = window.location.href
                  return {}
                }

                return {}
              }
            }
          }
        }
      }
    } else {
      return {err: this.i18n.key('options.noPropsError')}
    }

    return {}
  }

  private changeTheme(theme: string): null | string {
    if (this.themes[theme]) {
      optionsManager.saveTheme(this.themes[theme])
      return null
    }

    return this.i18n.key('options.unknownThemeError', [theme, Object.keys(this.themes).join(', ')])
  }

  private changeLang(lang: string): null | string {
    if (this.langs[lang]) {
      optionsManager.saveLang(this.langs[lang])
      return null
    }

    return this.i18n.key('options.unknownLangError', [lang, Object.keys(this.langs).join(', ')])
  }
}

export default OptionsProgram