import Program, { PropsList, DataObject, RunResult } from './Program'
import I18n from './I18n'

class HelpProgram extends Program {
  private programInstances: Program[]

  constructor(i18n: I18n, programInstances: Program[]) {
    super({
      mainCommand: 'help',
      i18n,
      propsConfig: {
        command: {
          type: 'string'
        }
      }
    })

    this.programInstances = programInstances
  }

  help(): DataObject {
    return {
      print: {
        type: 'print',
        output: this.i18n.key('help.helpProgramDescription')
      }
    }
  }

  protected async runCallback(propsList: PropsList): Promise<RunResult> {
    if (propsList.command && typeof propsList.command === 'string') {
      const commandHelpPrintData = this.getCommandHelpPrintData(propsList.command)

      return {
        err: null,
        data: commandHelpPrintData
      }
    }

    const list = [
      {
        key: this.i18n.key('help.list.commandHeader'),
        description: this.i18n.key('help.list.descriptionHeader')
      }
    ]

    list.push({
      key: new Array(list[0].key.length).fill('-').join(''),
      description: new Array(list[0].description.length).fill('-').join('')
    })

    for (const program of this.programInstances) {
      if (!program.isHidden()) {
        list.push({
          key: program.getMainCommand(),
          description: program.getDescription()
        })
      }
    }

    return {
      err: null,
      data: {
        print: [
          {type: 'printKeyDescription', output: list},
          {type: 'print', output: ''},
          {type: 'print', output: this.i18n.key('help.additionalInfro')}
        ]
      }
    }
  }

  private getCommandHelpPrintData(commandName: string): DataObject {
    const programInstance = this.programInstances.find(instance => instance.getMainCommand() === commandName)

    if (programInstance) {
      return programInstance.help()
    }

    return {print: {type: 'print', output: this.i18n.key('help.commandDoNotExist', commandName)}}
  }
}

export default HelpProgram