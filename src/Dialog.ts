class Dialog {
  private mainElement: HTMLElement
  private classNames = {
    main: 'dialog',
    dialogWindow: 'dialog__window',
    dialogContent: 'dialog__content',
    dialogButtons: 'dialog__buttons',
    dialogButton: 'dialog__button',
    dialogButtonOk: 'dialog__button--ok',
    dialogButtonNo: 'dialog__button--no'
  }

  constructor(slot: string | HTMLElement, config?: any) {
    this.mainElement = document.createElement('div')
    this.mainElement.classList.add(this.classNames.main)
    
    const dialogWindow = document.createElement('div')
    dialogWindow.classList.add(this.classNames.dialogWindow)
    this.mainElement.appendChild(dialogWindow)

    const dialogContent = document.createElement('div')
    dialogContent.classList.add(this.classNames.dialogContent)
    
    if (typeof slot === 'string') {
      dialogContent.innerText = slot
    } else {
      dialogContent.appendChild(slot)
    }

    dialogWindow.appendChild(dialogContent)
    
    if (config.buttons) {
      const buttonsWrapper = document.createElement('div')
      buttonsWrapper.classList.add(this.classNames.dialogButtons)

      if (config.buttons.ok) {
        const buttonOk = document.createElement('button')
        buttonOk.classList.add(this.classNames.dialogButtonOk)
      }

      if (config.buttons.ok) {
        const buttonNo = document.createElement('button')
        buttonNo.classList.add(this.classNames.dialogButtonNo)
      }
    }
  }
}