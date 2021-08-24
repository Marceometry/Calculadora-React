export function handleInput(value, currentValue) {    
    if (!value) return

    const isNan = isNaN(Number(value))
    const lastCharacter = currentValue[currentValue.length - 1]

    if (isNan) {
        if (lastCharacter === ' ' || lastCharacter === '.') return

        if (value !== '.') {
            return [...currentValue, ' ', value, ' ']
        }
    }

    return [...currentValue, value]
}