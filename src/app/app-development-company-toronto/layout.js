//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Leading Mobile App Development Company in Toronto  ",
  description: "BitsWits is a top-grade mobile app development company in Toronto that specializes in creating UX-driven mobile apps for startups and Fortune 500 companies.",
  //===== OG Tags =====
  openGraph: {
    title: 'Leading Mobile App Development Company in Toronto',
    description: 'BitsWits is a top-grade mobile app development company in Toronto that specializes in creating UX-driven mobile apps for startups and Fortune 500 companies.',
    url: '/app-development-company-toronto',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/app-development-company-toronto' },
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