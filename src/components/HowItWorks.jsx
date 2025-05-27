
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Users, TrendingUp, BarChart } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-8 w-8" />,
    title: 'Descubra Projetos',
    description: 'Explore uma variedade de startups inovadoras em tecnologias profundas, desde biotecnologia até inteligência artificial.',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Invista em Equipes',
    description: 'Apoie equipes talentosas com experiência e conhecimento técnico para desenvolver soluções revolucionárias.',
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: 'Acompanhe o Progresso',
    description: 'Receba atualizações regulares sobre o desenvolvimento dos projetos e o uso dos recursos investidos.',
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: 'Obtenha Retornos',
    description: 'Participe do sucesso das startups com potencial de alto retorno financeiro e impacto positivo na sociedade.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Como Funciona</h2>
          <p className="text-muted-foreground text-lg">
            Nosso processo simplificado permite que você invista em tecnologias inovadoras de forma segura e transparente.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-card rounded-lg p-6 h-full border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t border-dashed border-border"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
