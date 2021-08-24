import { useCalculator } from '../../contexts/CalculatorContext'
import StyledScreen from './styles'

export function Screen() {
    const { screenValue } = useCalculator()

    return (
        <StyledScreen>
            <h1>{screenValue}</h1>
        </StyledScreen>
    )
}