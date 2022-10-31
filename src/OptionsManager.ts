const optionsManager = {
  setInitialLang(): string {
    const lang = localStorage.getItem('lang') || 'en'
    return lang
  },
  setInitialTheme(): string {
    const themeClass = localStorage.getItem('themeClass') || 'theme-dark'
    this.setTheme(themeClass)
    return themeClass
  },
  saveLang(lang: string) {
    localStorage.setItem('lang', lang)
  },
  saveTheme(themeClass: string) {
    localStorage.setItem('themeClass', themeClass)   
    this.setTheme(themeClass) 
  },
  setTheme(themeClass: string) {
    const body = document.body

    if (body.className.match(/theme-.+?(\s|$)/)) {
      body.className = body.className.replace(/theme-.+?(\s|$)/, `${themeClass}$1`)
    } else {
      body.classList.add(themeClass)
    }
  }
}

export default optionsManager