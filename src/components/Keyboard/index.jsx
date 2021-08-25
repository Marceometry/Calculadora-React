import { Backspace } from '../../assets/Backspace'
import { useCalculator } from '../../contexts/CalculatorContext'
import { InputButton } from './InputButton'
import StyledKeyboard from './styles'

export function Keyboard() {
    const { clearScreen, deleteLastCharacter, calculate } = useCalculator()

    return (
        <StyledKeyboard>
            <div className="grid top">
                <button onClick={clearScreen} className="coloured">C</button>
                <InputButton className="coloured">/</InputButton>
                <InputButton className="coloured">*</InputButton>
                <button onClick={deleteLastCharacter} className="coloured"><Backspace /></button>
            </div>
            
            <div className="grid row">
                <InputButton>7</InputButton>
                <InputButton>8</InputButton>
                <InputButton>9</InputButton>
                <InputButton className="coloured">+</InputButton>
            </div>
            
            <div className="grid row">
                <InputButton>4</InputButton>
                <InputButton>5</InputButton>
                <InputButton>6</InputButton>
                <InputButton className="coloured">-</InputButton>
            </div>

            <div className="grid row">
                <InputButton>1</InputButton>
                <InputButton>2</InputButton>
                <InputButton>3</InputButton>
                <InputButton className="coloured">-+</InputButton>
            </div>

            <div className="grid bottom">
                <InputButton>.</InputButton>
                <InputButton>0</InputButton>
                <button onClick={calculate} className="coloured">=</button>
            </div>
        </StyledKeyboard>
    )
}