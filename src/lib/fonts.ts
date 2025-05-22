import { Playfair_Display, Lato } from 'next/font/google';

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'], // Regular, Bold, Black
  variable: '--font-playfair-display',
  display: 'swap',
});

export const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'], // Light, Regular, Bold
  variable: '--font-lato',
  display: 'swap',
});
