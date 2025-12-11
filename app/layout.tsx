import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';

const GA_MEASUREMENT_ID = 'G-DD4FJZRNDB';

export const metadata: Metadata = {
  title: 'VibeToRelease | Deploy Your AI Prototype to Production',
  description:
    'We take AI prototypes from proof-of-concept to production-ready, revenue-generating systems. Stop demoing. Start earning. From vibe to release in 6-8 weeks.',
  keywords: [
    'AI deployment',
    'ML production',
    'AI consultancy',
    'machine learning deployment',
    'AI prototype',
    'production AI',
    'MLOps',
    'AI engineering',
  ],
  authors: [{ name: 'VibeToRelease' }],
  creator: 'VibeToRelease',
  publisher: 'VibeToRelease',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vibetorelease.com',
    siteName: 'VibeToRelease',
    title: 'VibeToRelease | Deploy Your AI Prototype to Production',
    description:
      'We take AI prototypes from proof-of-concept to production-ready, revenue-generating systems. Stop demoing. Start earning.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VibeToRelease - From Vibe to Release',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VibeToRelease | Deploy Your AI Prototype to Production',
    description:
      'We take AI prototypes from proof-of-concept to production-ready, revenue-generating systems.',
    images: ['/og-image.png'],
    creator: '@vibetorelease',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#667eea',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
