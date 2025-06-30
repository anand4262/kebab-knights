import React from "react";
import Hero from "@/components/Home/Hero";
import Cook from "@/components/Home/Cook";
import Gallery from "@/components/Home/Gallery";
import About from "@/components/Home/About"
import Menu from "@/components/Home/Menu"
import OurTeam from "@/components/Home/Team"
import Testimonials from "@/components/Home/Testimonials";
import Contact from "@/components/Home/Contact"
import Faq from "@/components/Home/FAQs";
import StickyCallButton from "@/components/Common/StickyCallButton";
import { Metadata } from "next";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const metadata: Metadata = {
  title: 'Kebab Knights | Melbourne’s Best Street Kebab Experience',
  description:
    'Kebab Knights brings the ultimate halal kebab experience to Melbourne. Enjoy juicy kebab wraps, HSPs, falafel, and charcoal-grilled meats with unmatched flavour and late-night service.',
  keywords: [
    'Kebab Knights',
    'Melbourne kebabs',
    'Halal kebabs Melbourne',
    'HSP Melbourne',
    'Falafel wrap',
    'Charcoal grill kebabs',
    'Late-night food Melbourne',
    'Kebab shop near me',
  ],
  authors: [{ name: 'Kebab Knights Team', url: 'https://kebabknights.com.au' }],
  creator: 'Kebab Knights',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Kebab Knights | Melbourne’s Best Street Kebab Experience',
    description:
      'From wraps to HSPs and charcoal lamb, Kebab Knights is your go-to halal street food spot in Melbourne. Discover rich flavours and quick service.',
    url: 'https://kebabknights.com.au',
    siteName: 'Kebab Knights',
    images: [
      {
        url: '/og-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Kebab Knights hero image',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kebab Knights | Melbourne’s Best Street Kebab Experience',
    description:
      'Try Melbourne’s favourite halal kebabs, HSPs, and charcoal wraps. Fresh ingredients, big flavour, late-night service.',
    creator: '@kebabknights',
    images: ['/og-banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};



export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Menu />
      {/* <Cook /> */}
      <OurTeam />
      <Gallery />
      <Testimonials />
      <Faq />
      < Contact />
      <StickyCallButton />
    </main>
  );
}
