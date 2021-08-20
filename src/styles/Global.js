import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        font: 400 1rem sans-serif;
        color: var(--font-color);
        background: var(--background);
    }
`

export default GlobalStyles