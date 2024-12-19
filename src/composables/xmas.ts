const today = new Date()
const isXmasTime = today.getMonth() === 11

export function useXmas() {
  return {
    isXmasTime
  }
}
