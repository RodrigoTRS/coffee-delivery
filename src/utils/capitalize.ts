export function capitalize(text: string) {
    const lcase = text.toLowerCase()
    return lcase[0].toUpperCase().concat(lcase.substring(1))
}