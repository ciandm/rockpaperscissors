import { createGlobalStyle } from 'styled-components'
import colors from './Colors';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${colors.gradients.background};
    background-repeat: no-repeat;
    font-family: 'Barlow Semi Condensed', sans-serif;
    min-height: 100vh;
  }
`

export default GlobalStyles;