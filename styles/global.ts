/* eslint-disable max-len */
import {
  createGlobalStyle, css,
} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${({theme}) => css`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body,
    input,
    select,
    button {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      background: transparent;
    }
    button {
      cursor: pointer;
    }
    a {
      text-decoration: none;
    }
    main{
      background: ${theme.colors.background};
    }
  `}

`

export default GlobalStyles
