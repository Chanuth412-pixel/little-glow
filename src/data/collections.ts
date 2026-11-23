import floralImage from '../pages/assets/images/floral-collection.jpg.jpeg';
import cuteImage from '../pages/assets/images/cute-collection.jpg.jpeg';
import giftImage from '../pages/assets/images/gift-collection.jpg.jpeg';

export const collections = [
  {
    name: 'little blooms',
    description: 'delicate flowers, thoughtfully made.',
    image: floralImage,
    alt: 'Pastel flower-shaped candles arranged together',
  },
  {
    name: 'little friends',
    description: 'tiny companions, full of love.',
    image: cuteImage,
    alt: 'Cute bunny and teddy bear candles',
  },
  {
    name: 'little moments',
    description: 'something lovely for someone special.',
    image: giftImage,
    alt: 'Pink rose teddy bear and flower candles arranged as a gift',
  },
] as const;
