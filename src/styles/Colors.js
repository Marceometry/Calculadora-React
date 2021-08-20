import { createGlobalStyle } from 'styled-components'

const Colors = createGlobalStyle`
    :root {
        --font-color: ${({ theme }) => theme.fontColor};
        --background: ${({ theme }) => theme.background};
    }
`

export default Colors