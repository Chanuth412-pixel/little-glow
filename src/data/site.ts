export const site = {
  name: 'little glow.',
  tagline: 'A little science, a lot of love.',
  description: "Sculpted candles, hand-poured in small batches. Roses, peonies and tiny friends for life's little moments.",
  // Fill these in before publishing: without them the site has no way to order.
  // WhatsApp number in international format, digits only, for example 94771234567.
  whatsappNumber: '',
  instagramUrl: '',
} as const;

// How ordering works, shown as numbered steps. Edit to match how you actually take orders.
export const orderSteps = [
  {
    title: 'Choose a candle',
    text: 'Tell us which candle you love, or send a screenshot from this page.',
  },
  {
    title: 'Share the details',
    text: 'Let us know the colour, how many you need, and the date.',
  },
  {
    title: 'We pour it for you',
    text: 'We confirm the price on WhatsApp, then hand-pour your order.',
  },
] as const;

export function whatsappLink(message: string): string | null {
  if (!site.whatsappNumber) return null;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
