import { Screen } from '../Screen'
import { Keyboard } from '../Keyboard'
import CalculatorContainer from './styles'

export function Calculator() {
    return (
        <CalculatorContainer>
            <Screen />

            <Keyboard />
        </CalculatorContainer>
    )
}