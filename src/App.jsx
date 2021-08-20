import { ThemeProvider } from 'styled-components'
import { themes } from './styles/themes'
import Colors from './styles/Colors'
import GlobalStyles from './styles/Global'

function App() {
  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyles />
      <Colors />
      <h1>Calculadora</h1>
    </ThemeProvider>
  )
}

export default App