// components/MenuCard.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
};

const MenuCard = ({ item, index }: { item: MenuItem; index: number }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-[#2b2b2b] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow max-w-md w-full"
    >
      <Image
        src={item.image}
        alt={item.name}
        width={400}
        height={250}
        loading="lazy"
        className="w-full h-52 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-primary">{item.name}</h3>
        <p className="text-accent text-sm mb-3">{item.description}</p>
        <span className="block text-lg font-semibold text-white">{item.price}</span>
      </div>
    </motion.div>
  );
};

export default MenuCard;
