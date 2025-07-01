import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Nessas situações, os investidores vendem sua participação na empresa e realizam o lucro por meio da valorização das ações.",
    author: "Carlos Mendes",
    role: "Investidor Anjo",
    
  },
  {
    quote: "Investimentos em deep tech costumam ter horizontes de médio a longo prazo, pois envolvem ciclos mais longos de validação e escalabilidade. No entanto, quando bem-sucedidos, esses investimentos podem gerar retornos expressivos, dada a vantagem competitiva proporcionada pela tecnologia proprietária. ",
    author: "Dra. Mariana Silva",
    role: "CEO, BioTech Solutions",
    rating: 5,
  },
  {
    quote: "Nossa plataformas oferece suporte no seu pós-investimento, acompanhando o desempenho das startups, garantindo transparência na comunicação e assessorando no momento da saída para maximizar os retornos.",
    author: "Roberto Almeida",
    role: "Investidor Institucional",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Como funciona o retorno sobre o investimento em deep techs?</h2>
          <p className="text-muted-foreground text-lg">
          O retorno para os investidores acontece, em geral, no momento da chamada "saída" (ou exit), que ocorre quando a startup é adquirida por um comprador estratégico. 
          </p>
          <p className="text-muted-foreground text-lg">Nosso processo simplificado permite que você invista em tecnologias inovadoras de forma segura e transparente.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-card rounded-lg p-6 border shadow-sm h-full flex flex-col">
                <blockquote className="flex-grow">
                  <p className="text-foreground italic mb-6">{testimonial.quote}</p>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
