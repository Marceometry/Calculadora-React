import { createContext, useContext, useState } from "react"
import { handleInput } from '../utils/handleInput'

export const CalculatorContext = createContext({})

export function CalculatorContextProvider({ children }) {
    const [screenValue, setScreenValue] = useState('')

    function handleInputChange(value) {
        const newScreenValue = handleInput(value, screenValue)
        newScreenValue && setScreenValue(newScreenValue)
    }

    function deleteLastCharacter() {
        const newScreenValue = screenValue.reduce((array, character, index) => {
            if (index === screenValue.length - 1) return array
            return array = [...array, character]
        }, [])

        setScreenValue([...newScreenValue])
    }

    function clearScreen() {
        setScreenValue('')
    }

    return (
        <CalculatorContext.Provider value={{
            screenValue,
            handleInputChange,
            deleteLastCharacter,
            clearScreen
        }}>
            { children }
        </CalculatorContext.Provider>
    )
}

export function useCalculator() {
    return useContext(CalculatorContext)
}