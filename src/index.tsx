import { FontCSS, globalStyle, ResetCSS } from '@styles'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import ReactDOM from 'react-dom/client'

export const GlobalStyle = createGlobalStyle`
 ${ResetCSS}
 ${FontCSS}
 ${globalStyle}
`

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </>
)
