import Program, { DataObject } from "./Program";
import I18n from './I18n'
import optionsManager from './OptionsManager'
import Dialog from './Dialog'

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

  protected async runCallback(propsList: OptionsPropsList): Promise<{err: string | null}> {
    if (propsList.theme || propsList.lang) {
      
      if (propsList.theme) {
        if (this.themes[propsList.theme]) {
          this.changeTheme(propsList.theme)
        } else {
          return {
            err: this.i18n.key(
              'options.unknownThemeError',
              [
                propsList.theme,
                (() => {
                  let themesListText: string = ''

                  for (let theme in this.themes) {
                    themesListText += `${theme} (${this.i18n.key('options.theme.' + theme)}), `
                  }

                  themesListText = themesListText.replace(/, $/, '')

                  return themesListText
                })()
              ]
            )
          }
        }
      }

      if (propsList.lang) {
        if (this.langs[propsList.lang]) {
          const dialog = new Dialog(
            this.i18n.key('options.resetToChangeLang'),
            {
              buttonNo: this.i18n.key('button.cancel')
            }
          )

          const answer = await dialog.open()

          if (answer) {
            optionsManager.saveLang(this.langs[propsList.lang])
            window.location.href = window.location.href
          }
        }
      }
    } else {
      return {err: 'You need to provide --theme and/or --lang values.'}
    }

    return {err: null}
  }

  private changeTheme(theme: string): null | string {
    if (this.themes[theme]) {
      optionsManager.saveTheme(this.themes[theme])
      optionsManager.saveTheme(this.themes[theme])
      return null
    }

    return `Unknown theme '${theme}'`
  }

  private changeLang(theme: string): null | string {
    return null
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
}

export default OptionsProgram