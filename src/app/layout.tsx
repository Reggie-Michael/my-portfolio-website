import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'next-themes';
import { inter, jetbrains, playfair } from './font';

export const metadata: Metadata = {
  title: 'Michael Emmanuel - DevOps Engineer & Full-Stack Developer',
  description:
    'Portfolio website of Michael Emmanuel, showcasing expertise in DevOps, full-stack development, and automation solutions.',

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  openGraph: {
    title: 'Michael Emmanuel - DevOps Engineer & Full-Stack Developer',
    description:
      'Portfolio website of Michael Emmanuel, showcasing expertise in DevOps, full-stack development, and automation solutions.',
    url: 'https://www.michaelemmanuel.dev',
    siteName: 'Michael Emmanuel Portfolio',
    images: [
      {
        url: 'https://www.michaelemmanuel.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Michael Emmanuel - DevOps Engineer & Full-Stack Developer',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.className} ${playfair.className} ${jetbrains.className} min-h-screen"`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <Toaster
            position='top-center'
            toastOptions={{
              success: { style: { background: '#0f172a', color: '#f8fafc' } },
              error: { style: { background: '#7f1d1d', color: '#f8fafc' } },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
