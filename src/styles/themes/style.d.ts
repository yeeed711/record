import 'styled-components'
import type { ColorsTypes } from './theme'
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsTypes
  }
}
