import { createContext, useContext, useState } from 'react'
import { handleDeleteLast } from '../utils/handleDeleteLast'
import { handleCalculate } from '../utils/handleCalculate'
import { handleInput } from '../utils/handleInput'

export const CalculatorContext = createContext({})

export function CalculatorContextProvider({ children }) {
    const [screenValue, setScreenValue] = useState('')

    function calculate() {
        const result = handleCalculate(screenValue)
        if (!result) return
        
        const newScreenValue = String(result())
        newScreenValue && setScreenValue([...newScreenValue])
    }

    function handleInputChange(value) {
        const newScreenValue = handleInput(value, screenValue)
        newScreenValue && setScreenValue(newScreenValue)
    }

    function deleteLastCharacter() {
        const newScreenValue = handleDeleteLast(screenValue)
        newScreenValue && setScreenValue(newScreenValue)
    }

    function clearScreen() {
        setScreenValue('')
    }

    return (
        <CalculatorContext.Provider value={{
            screenValue,
            handleInputChange,
            deleteLastCharacter,
            clearScreen,
            calculate
        }}>
            { children }
        </CalculatorContext.Provider>
    )
}

export function useCalculator() {
    return useContext(CalculatorContext)
}