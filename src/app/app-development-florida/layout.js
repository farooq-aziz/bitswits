//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Leading Mobile App Development Company in Florida",
  description: "BitsWits is a premier app development company in Florida that helps startups and businesses across industries create salable and UX-driven mobile apps!",
  //===== OG Tags =====
  openGraph: {
    title: 'Leading Mobile App Development Company in Florida',
    description: 'BitsWits is a premier app development company in Florida that helps startups and businesses across industries create salable and UX-driven mobile apps!',
    url: '/app-development-florida',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/app-development-florida' },
  //===== No-Index =====
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-snippet': -1,
      'max-video-preview': -1,
      'max-image-preview': 'large',
    },
  },
  //===== GEO Tags =====
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}