import Program from "./Program";
import I18n from './I18n'

class LinksProgram extends Program {
  constructor(i18n: I18n) {
    super('links', i18n)
  }

  protected async runCallback(): Promise<{ err: string; data?: any; }> {
    const links = [
      {
        key: 'linkedin:',
        description: '[link=https://www.linkedin.com/in/michalkoczkodon/]https://www.linkedin.com/in/michalkoczkodon/[/link]'
      },
      {
        key: 'twitter:',
        description: '[link=https://twitter.com/MichalKoczkodon]https://twitter.com/MichalKoczkodon[/link]'
      },
      {
        key: 'github:',
        description: '[link=https://github.com/noiff]https://github.com/noiff[/link]'
      }
    ]

    return {err: null, data: {print: {type: 'printKeyDescription', output: links}}}
  }
}

export default LinksProgram