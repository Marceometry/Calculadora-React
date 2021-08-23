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

        &:last-child {
            grid-template-columns: 1fr 1fr 2fr;
        }
    }

    button {
        padding: 0.5rem;
        font-size: 2rem;
        text-align: center;
        border-radius: 8px;
        background: var(--background);

        &.coloured {
            color: var(--green);
        }
    }
`

export default StyledKeyboard