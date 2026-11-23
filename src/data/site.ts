export const site = {
  name: 'little glow.',
  tagline: 'a little science, a lot of love.',
  description: "Hand-poured candles, thoughtfully made for life's little moments.",
  whatsappNumber: '',
  instagramUrl: '',
} as const;

export function whatsappLink(message: string): string | null {
  if (!site.whatsappNumber) return null;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
