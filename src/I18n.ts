interface Translations {
  [key: string]: {
    [lang: string]: string
  }
}

type Replacements = string | string[] | {[replacementKey: string]: string}

class I18n {
  private translations: Translations
  private lang: string
  private fallback: string

  constructor(translations: Translations, initLang: string, fallback?: string) {
    this.translations = translations
    this.lang = initLang
    this.fallback = fallback || initLang
  }

  setLang(lang: string) {
    this.lang = lang
  }

  key(key: string, replacements?: Replacements): string {
    if (this.translations[key]) {
      let translation = this.translations[key][this.lang] || this.translations[key][this.fallback] || undefined

      if (typeof translation === 'string') {
        if (replacements) {
          const replacementsObject: {[key: string]: string} = {}

          if (typeof replacements === 'string') {
            replacementsObject['0'] = replacements
          } else if (Array.isArray(replacements)) {
            for (const index in replacements) {
              replacementsObject[`${index}`] = replacements[index]
            }
          } else if (typeof replacements === 'object') {
            for (const key in replacements) {
              replacementsObject[`${key}`] = replacements[key]
            }
          }

          for (const key in replacementsObject) {
            translation = translation.replaceAll('${' + key + '}', replacementsObject[key])
          }
        }

        return translation
      }
    }

    return key
  }
}

export default I18n



