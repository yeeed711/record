import type { DefaultTheme } from 'styled-components'

const colors = {
  background_01: '#FFFFFF',
  background_02: '#F7F9FB',
  background_03: '#E9F8EF', //green
  background_04: '#E9FBF8', // 카테고리 배경색
  border_01: '#CED4DA',
  border_02: '#C0E9D1', //green
  primary: '#05C471',
  text_01: '#868E96',
  text_02: '#9FCAB6', //green
  text_03: '#08B594' //deepgreen
}

export type ColorsTypes = typeof colors

export const lightTheme: DefaultTheme = {
  colors
}
// export const darkTheme: DefaultTheme = {

// }
