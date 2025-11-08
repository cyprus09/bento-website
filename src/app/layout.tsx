import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mayank Pallai - Software Engineer',
  description: 'Product Engineer at Sprinklr building scalable solutions with modern technologies.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'React', 'TypeScript', 'Go', 'Next.js'],
  authors: [{ name: 'Mayank Pallai' }],
  creator: 'Mayank Pallai',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mayankpallai.dev',
    title: 'Mayank Pallai - Software Engineer',
    description: 'Product Engineer at Sprinklr building scalable solutions with modern technologies.',
    siteName: 'Mayank Pallai Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mayank Pallai - Software Engineer',
    description: 'Product Engineer at Sprinklr building scalable solutions with modern technologies.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme script to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && systemPrefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}