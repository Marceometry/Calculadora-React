export function handleDeleteLast(currentValue) {    
    const newScreenValue = currentValue.reduce((array, character, index) => {
        if (index === currentValue.length - 2 && character === ' ') return array
        if (index === currentValue.length - 1) return array
        return array = [...array, character]
    }, [])

    return [...newScreenValue]
}