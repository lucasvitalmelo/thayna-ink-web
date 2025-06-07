export function useOpenWhatsApp() {

  type OpenWhatsAppProp = {
    phone: string,
  }

  function openChat({ phone }: OpenWhatsAppProp) {
    const cleanPhone = phone.replace(/\D/g, '')
    if (!cleanPhone) return

    const url = `https://wa.me/+55${cleanPhone}`


    window.open(url, "_blank")
  }

  return { openChat }
}
