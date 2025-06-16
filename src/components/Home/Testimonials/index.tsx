'use client';

import Slider from 'react-slick';
import { motion } from 'framer-motion';
import TestimonialCard from './_components/TestimonialCard';
import { testimonials } from './data';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Testimonials = () => (
  <section id="testimonials" className="bg-[#fdfcfa] py-24 sm:py-36 px-6">
    <div className="max-w-6xl mx-auto">
      {/* Styled Section Heading */}
      <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase text-start">
        Feedback
      </p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl lg:text-5xl font-semibold text-black text-start mb-14"
      >
        What Our Customers Say
      </motion.h2>

      <Slider {...sliderSettings}>
        {testimonials.map((t, i) => (
          <div key={i} className="px-4">
            <TestimonialCard {...t} />
          </div>
        ))}
      </Slider>
    </div>
  </section>
);

export default Testimonials;
