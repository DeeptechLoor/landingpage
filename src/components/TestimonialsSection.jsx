
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Investir em startups de deeptech através desta plataforma tem sido uma experiência incrível. A transparência e o acompanhamento detalhado dos projetos me dão confiança para continuar investindo.",
    author: "Carlos Mendes",
    role: "Investidor Anjo",
    rating: 5,
  },
  {
    quote: "Como fundador de uma startup de biotecnologia, conseguir financiamento era um grande desafio. Esta plataforma nos conectou com investidores que realmente entendem e valorizam inovações científicas.",
    author: "Dra. Mariana Silva",
    role: "CEO, BioTech Solutions",
    rating: 5,
  },
  {
    quote: "A qualidade dos projetos disponíveis é impressionante. A plataforma faz um excelente trabalho ao selecionar startups com tecnologias verdadeiramente inovadoras e equipes competentes.",
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
          <h2 className="text-3xl font-bold tracking-tight mb-4">O Que Dizem Sobre Nós</h2>
          <p className="text-muted-foreground text-lg">
            Veja o que investidores e fundadores de startups estão falando sobre nossa plataforma.
          </p>
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
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted"}
                    />
                  ))}
                </div>
                
                <blockquote className="flex-grow">
                  <p className="text-foreground italic mb-6">"{testimonial.quote}"</p>
                </blockquote>
                
                <div className="flex items-center mt-4">
                  <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center text-primary font-semibold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
