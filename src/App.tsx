import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { FontCSS, globalStyle, lightTheme, ResetCSS } from '@styles'
import type { ReactElement } from 'react'
import Router from './routes/Router'

const GlobalStyle = createGlobalStyle`
 ${ResetCSS}
 ${FontCSS}
 ${globalStyle}
`

const App = (): ReactElement => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}

export default App
