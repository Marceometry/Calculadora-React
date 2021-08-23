import StyledKeyboard from './styles'

export function Keyboard() {
    return (
        <StyledKeyboard>
            <div className="grid top">
                <button className="coloured">C</button>
                <button className="coloured">-+</button>
                <button className="coloured">%</button>
                <button className="coloured">/</button>
            </div>
            
            <div className="grid row">
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="coloured">x</button>
            </div>
            
            <div className="grid row">
                <button>4</button>
                <button>5</button>
                <button>5</button>
                <button className="coloured">–</button>
            </div>

            <div className="grid row">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button className="coloured">+</button>
            </div>

            <div className="grid bottom">
                <button>.</button>
                <button>0</button>
                <button className="coloured">=</button>
            </div>
        </StyledKeyboard>
    )
}