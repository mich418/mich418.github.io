import { logo } from '../variables/variables'

class Console {
  constructor() {
    this.printLogo()
  }

  printLogo() {
    for (let i = 0; i < logo.length; i++) {
      console.log(logo[i])
    }
  }
}

export default Console
