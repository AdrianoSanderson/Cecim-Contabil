export const useWhatsapp = () => {
  const phoneNumber = '5591984567097'

  const openWhatsapp = (customMessage: string) => {
    const encodedMessage = encodeURIComponent(customMessage)
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(url, '_blank')
  }

  return {
    openWhatsapp
  }
}