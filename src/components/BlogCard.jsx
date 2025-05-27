import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ post }) => {
  const navigate = useNavigate();
  const { id, title, excerpt, image, date, category } = post;

  const handleViewPost = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden card-hover h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded-full">
            {category}
          </div>
        </div>

        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl line-clamp-2">{title}</CardTitle>
          </div>
        </CardHeader>

        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
            {excerpt}
          </p>
        </CardContent>

        <CardFooter className="pt-4 border-t">
          <div className="w-full flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              {new Date(date).toLocaleDateString('pt-BR')}
            </div>
            <Button size="sm" className="gap-1" onClick={handleViewPost}>
              Ler mais <ArrowUpRight size={16} />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BlogCard; 