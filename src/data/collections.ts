import floralImage from '../pages/assets/images/floral-collection.jpg.jpeg';
import cuteImage from '../pages/assets/images/cute-collection.jpg.jpeg';
import giftImage from '../pages/assets/images/gift-collection.jpg.jpeg';

// focus: which part of a photo to keep when the card frame trims it (CSS object-position).
export const collections = [
  {
    name: 'little blooms',
    description: 'Peony and rose candles with every petal sculpted in wax.',
    image: floralImage,
    focus: '50% 45%',
    alt: 'Four peony-shaped candles in peach, pink, cream and lilac on a white tray',
  },
  {
    name: 'little friends',
    description: 'Bunnies and teddies holding a tiny red heart.',
    image: cuteImage,
    focus: '50% 50%',
    alt: 'Bunny and teddy bear candles, each holding a small red heart',
  },
  {
    name: 'little moments',
    description: 'Gift-ready boxes for someone special.',
    image: giftImage,
    focus: '50% 58%',
    alt: 'Gift box of pink roses and peonies with two lit candles',
  },
] as const;
