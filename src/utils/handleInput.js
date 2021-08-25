const isNan = (value) => {
    return isNaN(Number(value))
}

export function handleInput(value, currentValue) {    
    if (!value) return

    const lastCharacter = currentValue[currentValue.length - 1]

    if (isNan(value)) {
        if (isNan(lastCharacter) && !value.includes('-')) return
        if (value !== '.') return [...currentValue, ` ${value} `]
    }

    return [...currentValue, value]
}