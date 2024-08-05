//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Mobile App Development Company in Miami - BitsWits",
  description: "Make sure your mobile app is in safe hands by trusting our expert app developers in Miami. Hire us as we are the pioneers of Miami mobile app development",
  //===== OG Tags =====
  openGraph: {
    title: 'Mobile App Development Company in Miami - BitsWits',
    description: 'Make sure your mobile app is in safe hands by trusting our expert app developers in Miami. Hire us as we are the pioneers of Miami mobile app development',
    url: '/mobile-app-development-company-miami',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/mobile-app-development-company-miami' },
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