import I18n from './I18n'

interface PropsList {
  [prop: string]: string | number | boolean
}

interface ProgramConfig {
  mainCommand: string,
  description?: string,
  hidden?: boolean,
  i18n: I18n,
  propsConfig?: PropsConfig
}
interface PropsConfig {
  [prop: string]: {
    type:  PropType,
    default?: string | number | boolean
  }
}

interface DataObject {
  print?: Print | PrintLazy | PrintKeyDescription | (Print | PrintLazy | PrintKeyDescription)[]
}

interface Print {
  type: 'print',
  output: string | string[]
}

interface PrintLazy {
  type: 'printLazy',
  output: string
}

interface PrintKeyDescription {
  type: 'printKeyDescription',
  output: {key: string, description: string}[]
}

type PropType = 'string' | 'number' | 'boolean'

type Run = (propsString: string) => Promise<RunResult>

type RunCallback = (propsList: PropsList) => Promise<RunResult>

type RunResult = {
  err?: string,
  data?: DataObject,
  question?: {
    text: string
    callback: (input: string) => RunResult
  }
}

class Program {
  protected mainCommand: string
  protected description: string
  protected hidden: boolean = false
  protected i18n: I18n
  private propsConfig: PropsConfig

  constructor(config: ProgramConfig) {
    this.mainCommand = config.mainCommand
    this.i18n = config.i18n
    this.description = config.description || 'some program, not sure what it\'s doing...'
    this.hidden = config.hidden || !config.description
    this.propsConfig = config.propsConfig || {}
  }

  private createPropsFromString(propsString: string): PropsList {
    return propsString
      .replace(/\n.*/g, '')
      .split(' ')
      .filter(string => !!string.trim().length)
      .reduce((propsArray: string[][], currentElement: string) => {
        if (currentElement.match(/^--/)) {
          const splittedProp = currentElement.replace(/^--/, '').split('=')
          const propsSubArray = [splittedProp[0].toLocaleLowerCase()]

          if (splittedProp.length > 1) {
            propsSubArray.push(splittedProp[1])
          }

          propsArray.push(propsSubArray)
        } else if (propsArray.length && propsArray[propsArray.length - 1] && propsArray[propsArray.length - 1].length < 2) {
          propsArray[propsArray.length - 1].push(currentElement)
        }

        return propsArray
      }, [])
      .reduce((propsList: PropsList, currentArgSubArray: string[]) => {
        if (currentArgSubArray.length) {
          if (currentArgSubArray.length === 1) {
            propsList[currentArgSubArray[0].replace(/^no-/, '')] = !currentArgSubArray[0].match(/^no-/)
          } else if (currentArgSubArray.length === 2) {
            let numberValue: number

            if (currentArgSubArray[1] === 'false' || currentArgSubArray[1] === 'true') {
              propsList[currentArgSubArray[0]] = currentArgSubArray[1] === 'false' ? false : true
            } else if ((numberValue = Number(currentArgSubArray[1])) && numberValue !== NaN) {
              propsList[currentArgSubArray[0]] = numberValue
            } else {
              propsList[currentArgSubArray[0]] = currentArgSubArray[1]
            }
          }
        }

        return propsList
      }, {})
  }

  private validateProps(propsList: PropsList): string | null {
    let validationResult: string | null = null

    for (let prop in propsList) {
      if (!this.propsConfig[prop]) {
        validationResult = `Unknown property '${prop}'`
        break
      }

      if (typeof propsList[prop] !== this.propsConfig[prop].type) {
        validationResult = `Property '${prop}' has wrong type. Expected ${this.propsConfig[prop].type}, got ${typeof propsList[prop]}.`
        break
      }
    }
    
    return validationResult
  }

  protected async runCallback(propsList: PropsList): Promise<RunResult> {
    return {err: null}
  }

  getMainCommand(): string {
    return this.mainCommand
  }

  isHidden(): boolean {
    return this.hidden
  }

  getDescription(): string {
    return this.description
  }

  help(): DataObject {
    return {
      print: {
        type: 'print',
        output: this.i18n.key('help.forgotAboutIt')
      }
    }
  }

  async run(propsString: string): Promise<RunResult> {
    const propsList = this.createPropsFromString(propsString)
    const propsValidationResult = this.validateProps(propsList)
    
    if (propsValidationResult) {
      return {err: propsValidationResult}
    }

    return await this.runCallback(propsList)
  }
}

export default Program

export {
  PropsList,
  ProgramConfig,
  DataObject,
  RunResult,
  RunCallback,
  Run
}