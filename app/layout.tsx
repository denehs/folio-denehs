import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://denehs.me'),
  title: 'David (Shao Hang) Kao - Product Leader',
  description: 'Portfolio of David Kao showcasing professional experience, vibe coding experiments, and personal interests',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'David (Shao Hang) Kao - Product Leader',
    description: 'Portfolio showcasing professional experience, vibe coding experiments, and personal interests',
    url: 'https://denehs.me',
    siteName: 'David Kao Portfolio',
    images: [
      {
        url: 'https://denehs.me/og-image.png',
        width: 1200,
        height: 630,
        alt: 'David Kao - Product Leader',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David (Shao Hang) Kao - Product Leader',
    description: 'Portfolio showcasing professional experience, vibe coding experiments, and personal interests',
    images: ['https://denehs.me/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}