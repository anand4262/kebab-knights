'use client';

import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

type Props = {
  name: string;
  text: string;
  rating: number;
};

const TestimonialCard = ({ name, text, rating }: Props) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
    className="bg-white text-charcoal rounded-2xl shadow-lg p-6 flex flex-col gap-4"
  >
    <p className="text-md italic leading-relaxed">“{text}”</p>
    <div className="flex items-center gap-2">
      {Array.from({ length: 5 }, (_, i) => (
        <Icon
          key={i}
          icon="ic:round-star"
          className={`text-xl ${i < rating ? 'text-primary' : 'text-gray-300'}`}
        />
      ))}
    </div>
    <p className="text-sm font-semibold mt-2">— {name}</p>
  </motion.div>
);

export default TestimonialCard;
