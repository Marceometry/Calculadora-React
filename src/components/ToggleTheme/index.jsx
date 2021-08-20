import StyledThemeButton from './style'

export function ToggleTheme({ theme, setTheme }) {
    return (
        <StyledThemeButton
            name='Alterar Tema'
            aria-label='Alterar Tema'
            className={`toggle-theme ${theme}`}
            onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark')
            }}
        >
            <div className="button-bg">
                <div className="animate-toggle" />
                <div className="ball" />
            </div>
        </StyledThemeButton>
    )
}