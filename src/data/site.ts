export const site = {
  name: 'little glow.',
  tagline: 'A little science, a lot of love.',
  description: "Sculpted candles, hand-poured in small batches. Roses, peonies and tiny friends for life's little moments.",
  // Fill these in before publishing: without them the site has no way to order.
  // WhatsApp number in international format, digits only, for example 94771234567.
  whatsappNumber: '',
  instagramUrl: '',
} as const;

export function whatsappLink(message: string): string | null {
  if (!site.whatsappNumber) return null;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
