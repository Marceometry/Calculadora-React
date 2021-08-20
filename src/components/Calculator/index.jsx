import { Keyboard } from '../Keyboard'
import CalculatorContainer from './styles'

export function Calculator() {
    return (
        <CalculatorContainer>
            <h1>Calculadora</h1>

            <Keyboard />
        </CalculatorContainer>
    )
}