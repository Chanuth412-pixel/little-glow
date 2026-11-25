import floralImage from '../pages/assets/images/floral-collection.jpg';
import cuteImage from '../pages/assets/images/cute-collection.jpg.jpeg';
import giftImage from '../pages/assets/images/gift-collection.jpg.jpeg';

// focus: which part of a photo to keep when the card frame trims it (CSS object-position).
export const collections = [
  {
    name: 'little blooms',
    description: 'Elegant flower-shaped candles in beautiful colours and lovely fragrances.',
    image: floralImage,
    focus: '50% 45%',
    alt: 'Flower-shaped candles in pastel colours arranged on a woven tray',
  },
  {
    name: 'little friends',
    description: 'Adorable animal-shaped candles in soft and playful colours.',
    image: cuteImage,
    focus: '50% 50%',
    alt: 'Four teddy bear candles in brown, cream, pink and purple',
  },
  {
    name: 'little moments',
    description: 'Beautiful candle gift boxes for every special occasion.',
    image: giftImage,
    focus: '50% 58%',
    alt: 'Ribbon-tied gift box with pink and cream flowers and two lit candles',
  },
] as const;
