import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hey Drop - Share anything instantly',
  description: 'Easily share files, text, or notes with anyone instantly and securely. No login required. Created by Vishal Patel.',
  generator: 'Next.js',
  applicationName: 'Hey Drop',
  authors: [{ name: 'Vishal Patel', url: 'https://heydrops.vercel.app/' }],
  keywords: [
    'file sharing',
    'text sharing',
    'Hey Drop',
    'Vishal Patel',
    'instant sharing',
    'no login',
    'secure file transfer',
    'Hey drop by Vishal Patel',
    'Vishal Patel new project',
    'hey drop vishal',
    'Vishal Patel file sharing website',
  ],
  creator: 'Vishal Patel',
  publisher: 'Vishal Patel',
  metadataBase: new URL('https://heydrops.vercel.app/'),

  openGraph: {
    title: 'Hey Drop - Share anything instantly',
    description: 'Send files or text quickly without any login or signup. One-click sharing!',
    url: 'https://heydrops.vercel.app/',
    siteName: 'Hey Drop',
    images: [
      {
        url: '/favicon.png',
        width: 1200,
        height: 630,
        alt: 'Hey Drop preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Hey Drop - Share anything instantly',
    description: 'One-click sharing of files and text. Fast, secure, and login-free.',
    creator: '@Vishal',
    images: ['/favicon.png'],
  },

  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },

  manifest: '/manifest.json',
}

// ✅ Fix: move themeColor + colorScheme here
export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  )
}
