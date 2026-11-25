export const site = {
  name: 'little glow.',
  tagline: 'handmade scented candles, made with love.',
  description: 'Handmade scented candles in beautiful shapes, colours and fragrances. Perfect for your home or as a thoughtful gift.',
  // Fill these in before publishing: without them the site has no way to order.
  // WhatsApp number in international format, digits only, for example 94771234567.
  whatsappNumber: '94771234567',
  instagramUrl: 'https://www.instagram.com/chanuth412?cnvx=aWd3Z25udm43Njl3&utm_source=qr',
} as const;

export function whatsappLink(message: string): string | null {
  if (!site.whatsappNumber) return null;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
