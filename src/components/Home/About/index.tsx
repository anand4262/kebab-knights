"use client";
import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-36 bg-white text-charcoal">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full overflow-hidden rounded-3xl shadow-2xl"
        >
          <img
            src="/images/about/about-kebab.png"
            alt="Meet the Kebab Knights team"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full text-left"
        >
          {/* Heading */}
          <p className="text-primary text-sm font-semibold mb-3 tracking-widest uppercase">
            about us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight tracking-tight mb-6">
            Who We Are
          </h2>

          {/* Description */}
          <p className="text-grey text-base sm:text-lg mb-5 leading-relaxed">
            At <span className="font-semibold text-black">Kebab Knights</span>, we blend tradition with street-side energy — serving up mouthwatering kebabs, loaded falafel wraps, and crunchy HSPs from our mobile kitchen.
          </p>
          <p className="text-grey text-sm sm:text-base mb-6 leading-relaxed">
            With a passion for honest food and bold spices, our team crafts each meal fresh to order — whether you're vegan, meat-lover, or just hungry for something delicious.
          </p>

          {/* CTA */}
          <a
            href="#menu"
            className="inline-block mt-4 bg-primary text-black px-6 py-3 rounded-xl text-sm font-semibold shadow hover:bg-[#c99700] transition"
          >
            See Our Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
