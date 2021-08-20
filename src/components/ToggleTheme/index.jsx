export function ToggleTheme({ theme, setTheme }) {
    return (
        <button
            onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark')
            }}
        >
            Alterar Tema
        </button>
    )
}