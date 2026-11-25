import { Figtree, Marcellus } from 'next/font/google';

/** Display face for the home page redesign (headings, figures). */
export const homeDisplay = Marcellus({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-home-display',
});

/** Body face for the home page redesign. Large default size for readability. */
export const homeBody = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-home-body',
});
