
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Users, Target, Zap } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

const ProjectCard = ({ project }) => {
  const { id, name, description, image, category, raised, goal, investors, daysLeft, tags } = project;
  
  const progress = Math.min(Math.round((raised / goal) * 100), 100);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden card-hover h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img  
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
            alt={`${name} - Projeto de tecnologia profunda`}
            src="/images/hero.webp" />
          <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded-full">
            {category}
          </div>
        </div>
        
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl">{name}</CardTitle>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
            {description}
          </p>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>R$ {raised.toLocaleString('pt-BR')}</span>
                <span className="text-muted-foreground">Meta: R$ {goal.toLocaleString('pt-BR')}</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Users size={16} className="text-muted-foreground" />
                <span>{investors} investidores</span>
              </div>
              <div className="flex items-center gap-2">
                <Target size={16} className="text-muted-foreground" />
                <span>{progress}% financiado</span>
              </div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="pt-4 border-t">
          <div className="w-full flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{daysLeft}</span> dias restantes
            </div>
            <Link to={`/projetos/${id}`}>
              <Button size="sm" className="gap-1">
                Ver projeto <ArrowUpRight size={16} />
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
