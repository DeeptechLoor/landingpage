
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Zap, DollarSign } from 'lucide-react';

const stats = [
  {
    icon: <TrendingUp className="h-8 w-8" />,
    value: '45+',
    label: 'Projetos Financiados',
    description: 'Startups inovadoras que receberam investimento',
  },
  {
    icon: <Users className="h-8 w-8" />,
    value: '2.500+',
    label: 'Investidores Ativos',
    description: 'Comunidade engajada de investidores',
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    value: 'R$ 15M+',
    label: 'Capital Investido',
    description: 'Total de investimentos realizados na plataforma',
  },
  {
    icon: <Zap className="h-8 w-8" />,
    value: '8',
    label: 'Categorias DeepTech',
    description: 'Áreas de tecnologias profundas disponíveis',
  },
];

const StatsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-card rounded-lg p-6 border shadow-sm h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="font-semibold text-lg mb-2">{stat.label}</p>
                  <p className="text-muted-foreground text-sm">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
