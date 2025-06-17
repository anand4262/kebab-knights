"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from "@iconify/react";

const StickyCallButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.1,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 15,
        },
      }}
      className="fixed bottom-5 left-5 z-[60]"
    >
      <Link
        href="tel:0451558600"
        className="bg-primary text-black w-14 h-14 rounded-full flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300"
        aria-label="Call Kebab Knights"
      >
        <Icon icon="solar:phone-bold" className="text-2xl" />
      </Link>
    </motion.div>
  );
};

export default StickyCallButton;
