import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Users, Target, Zap } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '../utils/currency';

const OpportunityCard = ({ opportunity }) => {
  const navigate = useNavigate();
  const {
    id,
    name,
    description,
    image,
    goal,
    monetary,
    status,
    due_at,
    segment
  } = opportunity;

  const progress = {
    confirmed: goal.confirmed_payment_percentage,
    awaiting: goal.percentage_awaiting_payment,
    total: goal.confirmed_payment_percentage + goal.percentage_awaiting_payment
  };

  const daysLeft = Math.ceil((new Date(due_at) - new Date()) / (1000 * 60 * 60 * 24));

  const handleViewDetails = () => {
    navigate(`/opportunities/${id}`);
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
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded-full">
            {segment}
          </div>
        </div>

        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl">{name}</CardTitle>
          </div>
        </CardHeader>

        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
            {description}
          </p>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>{formatCurrency(goal.max_goal)}</span>
                <span className="text-muted-foreground">Meta: {formatCurrency(goal.max_goal)}</span>
              </div>
              <Progress value={progress.total} className="h-2" />
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Users size={16} className="text-muted-foreground" />
                <span>Valor Mínimo: {formatCurrency(monetary.min_investment_value)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Target size={16} className="text-muted-foreground" />
                <span>{progress.total}% financiado</span>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="pt-4 border-t">
          <div className="w-full flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{daysLeft}</span> dias restantes
            </div>
            <Button size="sm" className="gap-1" onClick={handleViewDetails}>
              Ver detalhes <ArrowUpRight size={16} />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default OpportunityCard; 