import { logoMICHALDEV } from '../variables/variables'

class Console {
  constructor() {
    this.printLogo()
  }

  printLogo() {
    for (let i = 0; i < logoMICHALDEV.lines.length; i++) {
      console.log(logoMICHALDEV.lines[i])
    }
  }
}

export default Console
