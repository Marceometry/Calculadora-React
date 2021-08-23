import styled from 'styled-components'

const StyledThemeButton = styled.button`
  position: absolute;
  right: 3rem;
  top: 3rem;
  font-size: 0;

  .button-bg {
    flex: 1;
    width: 4rem;
    height: 2rem;

    padding: 0 5px 0 7px;
    border-radius: 25px;
    border: 1px solid black;
    background: var(--font-color);
    
    display: flex;
    align-items: center;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .animate-toggle {
    flex: 0;
    transition: flex .2s;
  }

  .ball {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 999px;
    background: var(--body-background);
  }

  &.dark .animate-toggle {
    flex: auto;
  }
`

export default StyledThemeButton
