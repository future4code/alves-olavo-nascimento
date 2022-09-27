export const alteraFormato = (dataInicial: string): string => {
  const date = new Date(dataInicial)
  const dataFormatoLocal = date.toLocaleDateString()

  return dataFormatoLocal
}