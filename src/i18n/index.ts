import { createI18n } from 'vue-i18n'
import { getPrefferedLanguage } from '@/helpers/helpers'
import en from '@/i18n/en.json'
import pl from '@/i18n/pl.json'

const i18n = createI18n({
  legacy: false,
  locale: getPrefferedLanguage(),
  fallbackLocale: 'en',
  messages:{
    en,
    pl
  }
})

export default i18n
