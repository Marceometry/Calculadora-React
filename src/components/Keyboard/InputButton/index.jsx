import { useCalculator } from "../../../contexts/CalculatorContext"

export function InputButton({ children, ...props }) {
    const { handleInputChange } = useCalculator()

    return (
        <button 
            onClick={() => handleInputChange(children)}
            {...props}
        >
            {children}
        </button>
    )
}