export const BRAND = {
  name: "CLOUD TAPP",
  tagline: "NFC TECHNOLOGY SOLUTIONS",
  colors: {
    primaryBlue: "#1A4D8C",
    vibrantBlue: "#0070F3",
    techCyan: "#00D4FF",
    neutralGray: "#B0BCC5",
    bgDark: "#020617",
  },
  whatsapp: {
    phone: "573054331313",
    messages: {
      corporate: "Hola Cloud Tapp, me interesa cotizar tarjetas NFC corporativas para mi equipo. Quisiera más información sobre precios por volumen y personalización.",
      gastronomy: "Hola Cloud Tapp, quiero implementar menús y displays NFC en mi restaurante. Quisiera conocer los modelos de stands y opciones de personalización.",
      general: "Hola Cloud Tapp, requiero asesoría personalizada sobre sus soluciones tecnológicas NFC.",
    },
  },
} as const;

export const getWhatsAppUrl = (type: keyof typeof BRAND.whatsapp.messages) => {
  const message = BRAND.whatsapp.messages[type];
  return `https://wa.me/${BRAND.whatsapp.phone}?text=${encodeURIComponent(message)}`;
};