import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Mayank Pallai - Software Engineer",
  description: "Product Engineer at Sprinklr building scalable solutions with modern technologies.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "TypeScript", "Go", "Next.js"],
  authors: [{ name: "Mayank Pallai" }],
  creator: "Mayank Pallai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mayankpallai.dev",
    title: "Mayank Pallai - Software Engineer",
    description: "Product Engineer at Sprinklr building scalable solutions with modern technologies.",
    siteName: "Mayank Pallai Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} ${fraunces.variable} ${jetbrainsMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}