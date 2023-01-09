import { css } from 'styled-components'

export const globalStyle = css`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'IBM Plex Sans', sans-serif;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }

  img {
    width: 100%;
    height: auto;
  }

  button {
    border: none;
    cursor: pointer;
    padding: 0;
    background-color: inherit;
    font-family: inherit;
  }

  input {
    &:focus {
      outline: none;
    }
  }

  textarea {
    border: none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none;
  }

  .ir {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }
`
