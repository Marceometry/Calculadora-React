import StyledKeyboard from './styles'

export function Keyboard() {
    return (
        <StyledKeyboard>
            <div className="grid top">
                <button>C</button>
                <button>-+</button>
                <button>%</button>
                <button>/</button>
            </div>
            
            <div className="grid row">
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>x</button>
            </div>
            
            <div className="grid row">
                <button>4</button>
                <button>5</button>
                <button>5</button>
                <button>-</button>
            </div>

            <div className="grid row">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
            </div>

            <div className="grid bottom">
                <button>0</button>
                <button>.</button>
                <button>=</button>
            </div>
        </StyledKeyboard>
    )
}