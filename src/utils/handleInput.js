export function handleInput(value, currentValue) {    
    if (!value) return

    const isNan = value => { return isNaN(Number(value)) }
    const lastCharacter = currentValue[currentValue.length - 1]

    if (isNan(value)) {
        if (isNan(lastCharacter) || lastCharacter === ' ') return
        if (value !== '.') return [...currentValue, ` ${value} `]
    }

    return [...currentValue, value]
}