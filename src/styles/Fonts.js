import { createGlobalStyle } from 'styled-components'

const FontStyles = createGlobalStyle`
    /* responsive fonts */
    @media(max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media(max-width: 768px) {
        html {
            font-size: 87.5%;
        }
    }
`

export default FontStyles