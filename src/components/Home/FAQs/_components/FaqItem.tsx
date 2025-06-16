'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

type FaqItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

const FaqItem = ({ question, answer, defaultOpen = false }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="border-b border-gray-300 py-4 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center text-left">
        <h4 className="text-lg font-semibold text-white">{question}</h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Icon icon="ic:round-expand-more" className="text-white text-2xl" />
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-300 mt-3">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;
