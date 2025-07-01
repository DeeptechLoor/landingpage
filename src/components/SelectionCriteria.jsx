import React from 'react';
import { motion } from 'framer-motion';

const SelectionCriteria = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
        >
          Critérios de <span className="gradient-text">seleção</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Na <strong>DeepTechs.VC</strong>, buscamos deep techs startups na fase Seed ou Série A com DNA científico e tecnológico, que estejam criando soluções inovadoras em áreas como Biotecnologia, Inteligência Artificial, Energia Sustentável, Robótica, entre outras frentes. Valorizamos projetos com MVP validado ou protótipo funcional, modelo de negócio em evolução e grande potencial de crescimento.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Damos preferência a times fundadores com perfil técnico qualificado engajados na execução e com foco em gerar impacto positivo em setores estratégicos da economia.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Para estar na nossa plataforma, é essencial ter estrutura jurídica adequada para equity crowdfunding, materiais completos (pitch deck, vídeo, cap table, projeções) e disposição para manter um relacionamento transparente com nossa comunidade de investidores.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Todas as startups passam por uma curadoria técnica, avaliação regulatória e entrevistas conduzidas com apoio do nosso Comitê Científico. Selecionamos apenas os projetos mais promissores com inovação real, governança mínima e vontade de crescer junto com o ecossistema DeepTechs.VC.
        </motion.p>
      </div>
    </div>
  </section>
);

export default SelectionCriteria; 