import React from 'react';
import { motion } from 'framer-motion';
import { Building, FileSignature, CreditCard, TrendingUp, BarChart } from 'lucide-react';

const steps = [
  {
    icon: <Building className="h-8 w-8" />,
    title: 'Escolha a empresa',
    description: 'Selecione a oferta e valor do aporte e solicite um contrato.',
  },
  {
    icon: <FileSignature className="h-8 w-8" />,
    title: 'Assine o contrato de investimento',
    description: 'Assine o contrato online para garantir seu investimento.',
  },
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: 'Conclua o investimento',
    description: 'Seu investimento (R$) fica com você até a conclusão da oferta.',
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: 'Acompanhe sua investida',
    description: 'Parabéns! Agora você é um investidor e pode participar dos resultados do negócio.',
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
          <h2 className="text-3xl font-bold tracking-tight mb-4">Como Funciona o investimento em deep techs?</h2>

        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
