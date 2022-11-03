export function isMobile() {
  return window.innerWidth <= 600
}

export function objectHasOwnProperty(object: object, prop: string) {
  return Object.prototype.hasOwnProperty.call(object, prop)
}

export function sleep(time: number): Promise<number> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(time)
    }, time)
  })
}