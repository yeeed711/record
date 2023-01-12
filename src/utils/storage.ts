export const setItem = (key: string, value: any): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    throw new Error(`저장이 되지 않았습니다!`)
  }
}

export const getItem = (key: string): any => {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : []
  } catch (error) {
    throw new Error(`저장된 정보가 없습니다!`)
  }
}
