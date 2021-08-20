import { useState } from 'react'
import { Calculator } from './components/Calculator'
import { ToggleTheme } from './components/ToggleTheme'

import { ThemeProvider } from 'styled-components'
import { themes } from './styles/themes'
import Colors from './styles/Colors'
import GlobalStyles from './styles/Global'

function App() {
  const [currentTheme, setCurrentTheme] = useState('dark')
  
  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <ToggleTheme theme={currentTheme} setTheme={setCurrentTheme} />
      <Calculator />
      
      <Colors />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App