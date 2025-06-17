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
  title: 'Kebab Knights',
  description: 'Melbourne’s Best Street Kebab Experience',
  icons: {
    icon: '/favicon.ico',
  },
};


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Menu />
      <Cook />
      <OurTeam />
      <Gallery />
      <Testimonials />
      <Faq />
      < Contact />
      <StickyCallButton />
    </main>
  );
}
