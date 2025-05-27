import React from 'react';
import { motion } from 'framer-motion';

const Carousel = ({ children, items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex-shrink-0"
          >
            {children(item)}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Carousel; 