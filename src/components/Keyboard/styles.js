import styled from "styled-components"

const StyledKeyboard = styled.main`
    margin-top: 1rem;
    gap: .5rem;
    display: flex;
    flex-direction: column;

    .grid {
        gap: .5rem;
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    button {
        padding: 0.5rem;
        font-size: 2rem;
        text-align: center;
        border-radius: 8px;
        background: #202020;
    }
`

export default StyledKeyboard