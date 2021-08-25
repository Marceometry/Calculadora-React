export function handleCalculate(expression) {
    return Function(`return ${expression.join('')}`)
}