import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Tajawal } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/i18n'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const tajawal = Tajawal({
  variable: '--font-tajawal',
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '700', '900'],
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nazaratjo.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'NazaratJO — Jordan Optics Marketplace',
    template: '%s · NazaratJO',
  },
  description:
    'The marketplace connecting every optics shop, wholesaler, and customer in Jordan. Discover eyeglasses, sunglasses, and contact lenses — or sell across the kingdom.',
  keywords: [
    'Jordan optics',
    'eyeglasses Jordan',
    'sunglasses Jordan',
    'contact lenses Jordan',
    'optics marketplace',
    'نظارات الأردن',
    'سوق النظارات',
  ],
  authors: [{ name: 'NazaratJO' }],
  creator: 'NazaratJO',
  applicationName: 'NazaratJO',
  alternates: {
    canonical: '/',
    languages: {
      ar: '/',
      en: '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ar_JO',
    alternateLocale: ['en_US'],
    url: siteUrl,
    siteName: 'NazaratJO',
    title: 'NazaratJO — Jordan Optics Marketplace',
    description:
      'Discover eyeglasses, sunglasses, and contact lenses from trusted opticians across Jordan.',
    images: [
      {
        url: '/hero-eyewear.png',
        width: 1024,
        height: 1024,
        alt: 'NazaratJO — Jordan optics marketplace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NazaratJO — Jordan Optics Marketplace',
    description:
      'Discover eyeglasses, sunglasses, and contact lenses from trusted opticians across Jordan.',
    images: ['/hero-eyewear.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${tajawal.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}