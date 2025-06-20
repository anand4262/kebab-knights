'use client';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden text-offwhite">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster="/images/hero/hero-fallback.png"
      >
        <source src="/videos/kebab-grill.mp4" type="video/mp4" />
      </video>

      {/* Dimmed overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary text-lg font-medium tracking-widest uppercase mb-4"
        >
          Melburne’s Most Wanted
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-7xl font-extrabold text-primary tracking-tight drop-shadow-xl mb-4"
        >
          KEBAB KNIGHTS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-accent text-lg md:text-xl max-w-2xl mb-8 tracking-wide"
        >
          Melting grills. Street vibes. Loaded wraps. Midnight flavour.
        </motion.p>

        <motion.a
          href="#menu-section"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="bg-primary text-black px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-[#c99700] transition"
        >
          See Our Menu
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
