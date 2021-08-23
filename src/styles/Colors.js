import { createGlobalStyle } from 'styled-components'

const Colors = createGlobalStyle`
    :root {
        --font-color: ${({ theme }) => theme.fontColor};
        --body-background: ${({ theme }) => theme.bodyBackground};
        --background: ${({ theme }) => theme.background};
        --green: ${({ theme }) => theme.green};
    }
`

export default Colors