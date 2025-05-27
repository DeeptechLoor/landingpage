
import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import HowItWorks from '@/components/HowItWorks';
import CategorySection from '@/components/CategorySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <HeroSection />
      <StatsSection />
      <FeaturedProjects />
      <HowItWorks />
      <CategorySection />
      <TestimonialsSection />
      <CTASection />
    </motion.div>
  );
};

export default HomePage;
