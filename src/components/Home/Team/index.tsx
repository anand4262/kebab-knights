"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const OurTeam = () => {
  return (
    <section id="team" className="relative h-[90vh] w-full overflow-hidden text-offwhite">
      {/* Background Team Image */}
      <Image
        src="/images/team/our-team.png"
        alt="Our Team"
        fill
        priority
        className="object-cover object-center z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-6 text-center">
        <motion.p
          className="text-primary text-lg font-normal mb-3 tracking-widest uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet the Crew
        </motion.p>

        <motion.h2
          className="text-3xl lg:text-5xl font-semibold text-white mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Cooking together with the experts.
        </motion.h2>

        <motion.p
          className="text-accent text-md md:text-lg max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          From grill masters to falafel fanatics, our crew brings fire, flavor, and fun to the streets of Melbourne.
        </motion.p>
      </div>
    </section>
  );
};

export default OurTeam;
