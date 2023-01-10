import type { DefaultTheme } from 'styled-components'

const colors = {
  background_01: '#FFFFFF',
  background_02: '#F8F8F8',
  border_01: '#CED4DA',
  text_01: '#868E96'
}

export type ColorsTypes = typeof colors

export const lightTheme: DefaultTheme = {
  colors
}
// export const darkTheme: DefaultTheme = {

// }
