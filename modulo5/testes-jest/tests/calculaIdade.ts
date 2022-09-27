export const calculaIdade = (year: number): number => {
    const currentYear = new Date().getFullYear()
    const age = currentYear - year
    
    return age
}