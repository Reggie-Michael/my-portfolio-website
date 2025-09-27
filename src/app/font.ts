import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  //   weight: ["400", "700"],
  variable: '--font-display',
  display: 'swap',
});

export const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  //   weight: ["400", "700"],
  variable: '--font-jetbrains',
  display: 'swap',
});
