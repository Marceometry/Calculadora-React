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
        transition: all .2s;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    button {
        all: unset;
        cursor: pointer;
        transition: filter .2s;

        &:hover {
            filter: brightness(.8);
        }
    }
`

export default GlobalStyles