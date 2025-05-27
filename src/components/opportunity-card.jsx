import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import DetailedProgressBar from './ui/detailed-progress-bar';
import { formatCurrency } from '../utils/currency';
import { Button } from './ui/button';

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
    due_at
  } = opportunity;

  const progress = {
    confirmed: goal.confirmed_payment_percentage,
    awaiting: goal.percentage_awaiting_payment,
    total: goal.confirmed_payment_percentage + goal.percentage_awaiting_payment
  };

  const handleViewDetails = () => {
    navigate(`/opportunities/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-lg"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Valor Total</span>
            <span className="font-medium">{formatCurrency(goal.max_goal)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Valor Mínimo</span>
            <span className="font-medium">{formatCurrency(monetary.min_investment_value)}</span>
          </div>
        </div>

        <DetailedProgressBar
          value={progress}
          message="Progresso do Investimento"
          className="mt-4"
        />

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2">
            <span className={`inline-block h-2 w-2 rounded-full ${
              status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
            }`} />
            <span className="text-sm capitalize">{status}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            Encerra em {new Date(due_at).toLocaleDateString()}
          </span>
        </div>

        <div className="flex justify-end">
          <Button 
            size="sm" 
            className="gap-1"
            onClick={handleViewDetails}
          >
            Ver detalhes <ArrowUpRight size={16} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default OpportunityCard; 