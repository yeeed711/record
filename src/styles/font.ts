import { css } from 'styled-components'

export const FontCSS = css`
  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 400;
    src: local('IBM Plex Sans'),
      url('./assets/fonts/IBMPlexSans_Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 500;
    src: url('./assets/fonts/IBMPlexSans-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 700;
    src: url('./assets/fonts/IBMPlexSans-Bold.woff') format('woff');
  }
`
