
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Microscope, Cpu, Leaf, Atom, Database, Brain, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    icon: <Microscope className="h-6 w-6" />,
    name: 'Biotecnologia',
    description: 'Inovações em saúde, medicina e ciências biológicas',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    name: 'Computação Quântica',
    description: 'Tecnologias de processamento quântico e aplicações',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    name: 'Energia Sustentável',
    description: 'Soluções para geração e armazenamento de energia limpa',
    color: 'from-green-500 to-emerald-400',
  },
  {
    icon: <Atom className="h-6 w-6" />,
    name: 'Nanotecnologia',
    description: 'Manipulação de materiais em escala nanométrica',
    color: 'from-orange-500 to-amber-400',
  },
  {
    icon: <Database className="h-6 w-6" />,
    name: 'Big Data & IA',
    description: 'Análise avançada de dados e inteligência artificial',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    icon: <Brain className="h-6 w-6" />,
    name: 'Neurotecnologia',
    description: 'Interfaces cérebro-máquina e tecnologias neurais',
    color: 'from-pink-500 to-rose-400',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    name: 'Cibersegurança',
    description: 'Proteção avançada de dados e sistemas',
    color: 'from-red-500 to-orange-400',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    name: 'Outras Tecnologias',
    description: 'Inovações em diversas áreas emergentes',
    color: 'from-gray-600 to-gray-500',
  },
];

const CategorySection = () => {
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
          <h2 className="text-3xl font-bold tracking-tight mb-4">Categorias de Tecnologias</h2>
          <p className="text-muted-foreground text-lg">
            Explore projetos inovadores em diversas áreas de tecnologias profundas com alto potencial de impacto.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link to={`/projetos?categoria=${category.name}`} className="block h-full">
                <div className="bg-card rounded-lg border overflow-hidden h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-2 rounded-full bg-gradient-to-r ${category.color} text-white`}>
                        {category.icon}
                      </div>
                      <h3 className="ml-3 font-semibold text-lg">{category.name}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{category.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
