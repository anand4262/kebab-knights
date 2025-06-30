// src/app/promo/page.tsx
import PromoClientPage from './_components/PromoClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Promo Deals | Kebab Knights Ascot Vale',
  description: 'Grab the best promo deals on kebabs, HSPs, and combos in Ascot Vale. Limited-time offers at Kebab Knights!',
  keywords: ['Kebab deals', 'HSP promo', 'combo meals Melbourne', 'halal kebabs Ascot Vale', 'cheap kebab offers'],
  openGraph: {
    title: 'Promo Deals | Kebab Knights Ascot Vale',
    description: 'Limited-time kebab deals you can’t miss. Grab yours now at Kebab Knights in Ascot Vale!',
    url: 'https://kebabknights.com.au/promo',
    type: 'website',
    siteName: 'Kebab Knights',
    images: [
      {
        url: 'https://kebabknights.com.au/images/landing/landing-og.png',
        width: 1200,
        height: 630,
        alt: 'Promo Kebabs Ascot Vale',
      },
    ],
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Promo Deals | Kebab Knights Ascot Vale',
    description: 'Don’t miss exclusive kebab combo offers in Ascot Vale. Kebab Knights promo menu is live!',
    images: ['https://kebabknights.com.au/images/landing/landing-og.png'],
  },
  alternates: {
    canonical: 'https://kebabknights.com.au/promo',
  },
};

export default function PromoPage() {
  return <PromoClientPage />;
}
