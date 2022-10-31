interface DialogConfig {
  name: string,
  buttonOk: string,
  buttonNo?: string,
  width: number,
  height?: number,
  showClose: boolean
}

interface DialogConfigArgument {
  name?: string
  buttonOk?: string,
  buttonNo?: string,
  width?: number,
  height?: number,
  showClose?: boolean
}

class Dialog {
  private mainElement: HTMLElement
  private buttonOk: HTMLButtonElement
  private buttonNo: HTMLButtonElement | undefined
  private dialogClose: HTMLButtonElement | undefined
  private config: DialogConfig

  private classNames = {
    main: 'dialog',
    dialogWindow: 'dialog__window',
    dialogHeader: 'dialog__header',
    dialogName: 'dialog__name',
    dialogClose: 'dialog__close',
    dialogContent: 'dialog__content',
    dialogContentDefault: 'dialog__content--default',
    dialogButtons: 'dialog__buttons',
    dialogButtonsMulti: 'dialog__buttons--multi',
    dialogButton: 'dialog__button',
    dialogButtonOk: 'dialog__button--ok',
    dialogButtonNo: 'dialog__button--no'
  }

  constructor(slot: string | HTMLElement, config?: DialogConfigArgument) {
    this.config = {
      name: 'Dialog',
      buttonOk: 'OK',
      width: 400,
      showClose: true,
      ...(config ? config : {})
    }

    this.mainElement = document.createElement('div')
    this.mainElement.classList.add(this.classNames.main)
    
    const dialogWindow = document.createElement('div')
    dialogWindow.classList.add(this.classNames.dialogWindow)
    dialogWindow.style.width = `${this.config.width}px`
    if (this.config.height) {
      dialogWindow.style.minHeight = `${this.config.height}px`
    }
    this.mainElement.appendChild(dialogWindow)

    const dialogHeader = document.createElement('div')
    dialogHeader.classList.add(this.classNames.dialogHeader)

    const dialogName = document.createElement('span')
    dialogName.classList.add(this.classNames.dialogName)
    dialogName.innerHTML = this.config.name
    dialogHeader.appendChild(dialogName)

    if (this.config.showClose) {
      this.dialogClose = document.createElement('button')
      this.dialogClose.classList.add(this.classNames.dialogClose)
      dialogHeader.appendChild(this.dialogClose)
    }    

    dialogWindow.appendChild(dialogHeader)

    const dialogContent = document.createElement('div')
    dialogContent.classList.add(this.classNames.dialogContent)
    
    if (typeof slot === 'string') {
      dialogContent.innerText = slot
      dialogContent.classList.add(this.classNames.dialogContentDefault)
    } else {
      dialogContent.appendChild(slot)
    }

    dialogWindow.appendChild(dialogContent)
    
    
    const buttonsWrapper = document.createElement('div')
    buttonsWrapper.classList.add(this.classNames.dialogButtons)

    if (this.config.buttonNo) {
      this.buttonNo = document.createElement('button')
      this.buttonNo.classList.add(this.classNames.dialogButton, this.classNames.dialogButtonNo)
      this.buttonNo.innerText = this.config.buttonNo
      buttonsWrapper.appendChild(this.buttonNo)
      buttonsWrapper.classList.add(this.classNames.dialogButtonsMulti)
    }
    
    this.buttonOk = document.createElement('button')
    this.buttonOk.classList.add(this.classNames.dialogButton, this.classNames.dialogButtonOk)
    this.buttonOk.innerText = this.config.buttonOk

    buttonsWrapper.appendChild(this.buttonOk)

    dialogWindow.appendChild(buttonsWrapper)
  }

  open(): Promise<boolean> {
    document.body.appendChild(this.mainElement)

    
    return new Promise(resolve => {
      let noListener: () => void | undefined;
      let closeListener: () => void | undefined

      const okListener = () => {
        this.buttonOk.removeEventListener('click', okListener)
        
        if (this.buttonNo && noListener !== undefined) {
          this.buttonNo.removeEventListener('click', noListener)
        }

        if (this.dialogClose && closeListener !== undefined) {
          this.dialogClose.removeEventListener('click', closeListener)
        }

        this.close()

        resolve(true)
      }

      this.buttonOk.addEventListener('click', okListener)

      if (this.config.showClose && this.dialogClose) {
        closeListener = () => {
          this.dialogClose.removeEventListener('click', closeListener)
          this.buttonOk.removeEventListener('click', okListener)

          if (this.buttonNo && noListener !== undefined) {
            this.buttonNo.removeEventListener('click', noListener)
          }

          this.close();

          resolve(true)
        }

        this.dialogClose.addEventListener('click', closeListener)
      }

      if (this.buttonNo) {
        noListener = () => {
          this.buttonNo.removeEventListener('click', noListener)
          this.buttonOk.removeEventListener('click', okListener)

          if (this.dialogClose && closeListener !== undefined) {
            this.dialogClose.removeEventListener('click', closeListener)
          }

          this.close()

          resolve(false)
        }

        this.buttonNo.addEventListener('click', noListener)
      }
    })
  }

  close() {
    this.mainElement.remove()
  }
}

export default Dialog