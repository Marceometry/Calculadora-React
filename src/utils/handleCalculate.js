export function handleCalculate(expression) {
    let result
    
    try {
        result = Function(`return ${expression.join('')}`)
    } catch (error) {
        alert(error.message)
        result = null
    }

    return result
}