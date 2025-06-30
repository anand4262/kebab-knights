import { Metadata } from 'next';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Icon } from '@iconify/react';

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

const bestSellers = [
  {
    label: 'Chicken HSP',
    description: 'Loaded with crispy fries, tender chicken, and sauces',
    image: '/images/menu/chicken-hsp.png',
    icon: 'mdi:food-drumstick',
  },
  {
    label: 'Lamb Kebab Wrap',
    description: 'Juicy lamb wrapped in warm bread with fresh veggies',
    image: '/images/menu/lamb-wrap.png',
    icon: 'mdi:food-kebab',
  },
  {
    label: 'Falafel Pocket',
    description: 'Crispy falafels packed in pita with tahini & salad',
    image: '/images/menu/falafal-pocket.png',
    icon: 'mdi:leaf',
  },
];

export default function PromoLandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#fffaf3] text-charcoal min-h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-[300%] h-[300%] bg-gradient-to-tr from-[#ffd700]/10 via-[#8A1313]/10 to-[#fffaf3] rotate-45 origin-top-left blur-3xl opacity-20" />
        </div>

        <div className="relative container mx-auto max-w-screen-xl px-6 py-24 md:py-40 grid grid-cols-1 md:grid-cols-2 items-center gap-16 z-10">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-primary">
              Taste the <span className="text-[#FFD700]">Legend</span> at Kebab Knights
            </h1>
            <p className="text-lg text-gray-700 max-w-xl">
              Your go-to destination in Ascot Vale for mouthwatering kebabs, wraps, falafel and more. Open daily till 2 AM!
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Kebab+Knights+Ascot+Vale"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-primary text-primary font-medium px-6 py-3 rounded-full flex items-center gap-2 hover:bg-primary hover:text-black transition-all"
              >
                <span>Get Directions</span>
                <Icon icon="tabler:map-pin" className="text-lg group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full"
          >
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="/images/landing/kebab-hero.png"
                alt="Kebab Hero"
                width={500}
                height={800}
                className="rounded-[2rem] shadow-xl object-cover"
                priority
              />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Best Sellers */}
      <section id="best-sellers" className="bg-[#111111] text-[#FAF9F6] py-20">
        <div className="container mx-auto max-w-screen-xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Fan Favorites</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {bestSellers.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-[#1c1c1c] rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 space-y-2">
                  <div className="flex items-center gap-2 text-[#FFD700] text-lg font-semibold">
                    <Icon icon={item.icon} className="text-xl" />
                    {item.label}
                  </div>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
