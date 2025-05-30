import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                <Zap size={16} className="mr-1" /> Inovação em DeepTech
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Invista no <span className="gradient-text">futuro</span> da tecnologia profunda
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-xl text-muted-foreground"
            >
              Conectamos investidores a startups inovadoras em tecnologias profundas, impulsionando o desenvolvimento de soluções que transformarão o mundo.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="https://wtlbloor.netlify.app/investor/login">
                <Button size="lg" className="w-full sm:w-auto">
                  Explorar projetos <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a> 
              <Link to="/sobre">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Saiba mais
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <Shield size={16} className="text-primary" />
                </div>
                <span className="text-sm">Investimentos seguros</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <TrendingUp size={16} className="text-primary" />
                </div>
                <span className="text-sm">Alto potencial de retorno</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <Zap size={16} className="text-primary" />
                </div>
                <span className="text-sm">Tecnologias inovadoras</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img  
                className="w-full h-auto rounded-xl" 
                alt="Cientistas trabalhando em laboratório de alta tecnologia com equipamentos avançados"
                src="/images/hero.webp" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="glass-effect rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Projetos em destaque</h3>
                    <span className="text-sm text-accent font-medium">+30 projetos</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Biotecnologia</span>
                      <span className="text-sm font-medium">12 projetos</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Inteligência Artificial</span>
                      <span className="text-sm font-medium">8 projetos</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Energia Sustentável</span>
                      <span className="text-sm font-medium">6 projetos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
