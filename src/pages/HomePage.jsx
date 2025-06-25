import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import HowItWorks from '@/components/HowItWorks';
import CategorySection from '@/components/CategorySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';
import OpportunitiesList from '@/components/opportunities-list';
import BlogSection from '@/components/BlogSection';
import CTASection1 from '@/components/CTASection1';
import Returns from '@/components/Returns';
import HowItInvest from '@/components/HowItInvest';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <HeroSection />
      <CTASection1 />
      {/*
      <StatsSection />

      <FeaturedProjects />
      <div className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <OpportunitiesList />
        </div>
      </div>
       <CategorySection /> */}
      <HowItWorks />
      <Returns />
      <HowItInvest />
     {/*  <TestimonialsSection />*/}
      <CTASection />
      <BlogSection />
    </motion.div>
  );
};

export default HomePage;
