import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Home, Search } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center px-4"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 120 }}
      >
        <Search size={80} className="text-primary mb-6" />
      </motion.div>
      
      <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Página Não Encontrada</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        Oops! Parece que a página que você está procurando não existe ou foi movida.
        Não se preocupe, vamos te ajudar a encontrar o caminho de volta.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/">
          <Button size="lg" className="w-full sm:w-auto">
            <Home className="mr-2 h-4 w-4" />
            Voltar para a Página Inicial
          </Button>
        </Link>
        <Link to="/projetos">
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            <Search className="mr-2 h-4 w-4" />
            Explorar Projetos
          </Button>
        </Link>
      </div>
      
      <div className="mt-12 text-sm text-muted-foreground">
        <p>Se você acredita que isso é um erro, por favor, entre em contato conosco.</p>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;