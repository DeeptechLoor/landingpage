import React from 'react';
import { motion } from 'framer-motion';
import { formatCurrency } from '@/utils/formatCurrency';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const OpportunityCard = ({ opportunity }) => {
  const {
    name,
    segment,
    image,
    modality,
    goal,
    monetary,
    end_at,
    due_at,
    id
  } = opportunity;

  const handleWithAvailableValue = () => {
    const maxGoal = goal.max_goal;
    const confirmed = goal.confirmed_payment;
    const unconfirmed = goal.unconfirmed_payment;
    const total = confirmed + unconfirmed;
    return maxGoal - total;
  };

  const handleWithInvestedValue = () => {
    const confirmed = goal.confirmed_payment;
    const unconfirmed = goal.unconfirmed_payment;
    return confirmed + unconfirmed;
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative flex h-[466px] w-full min-w-[17rem] max-w-[288px] flex-shrink-0 flex-col items-start border border-border rounded-lg shadow-sm transition-all"
    >
      <div className="mx-auto h-auto w-full overflow-hidden p-5">
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 bg-primary rounded-full"></div>
          <span className="text-sm text-primary truncate max-w-[13rem]" title={segment}>
            {segment}
          </span>
        </div>

        <figure className="relative h-[10rem] w-full mt-2">
          <img
            src={image}
            alt={`Imagem da oportunidade ${name}`}
            className="h-full w-full object-cover rounded-lg"
          />
        </figure>

        <div className="relative flex h-full flex-col pt-2">
          <h3 className="line-clamp-1 text-left text-base font-normal">
            {name}
          </h3>

          {modality === 'equity' && (
            <>
              <ProgressBar
                value={goal.confirmed_payment_percentage}
                className="my-2"
                message="Meta mínima"
              />
              <div className="space-y-2 pt-4">
                <p className="flex justify-between text-sm">
                  <span className="font-semibold">Meta</span>
                  {formatCurrency(goal.max_goal)}
                </p>
                <p className="flex justify-between text-sm">
                  <span className="font-semibold">Valor investido</span>
                  {formatCurrency(handleWithInvestedValue())}
                </p>
                <p className="flex justify-between text-sm">
                  <span className="font-semibold">Investimento mínimo</span>
                  {formatCurrency(monetary.min_investment_value)}
                </p>
                <p className="flex justify-between text-sm">
                  <span className="font-semibold">Disponível</span>
                  {formatCurrency(handleWithAvailableValue())}
                </p>
              </div>
            </>
          )}

          {modality === 'debt' && (
            <>
              <ProgressBar
                value={goal.confirmed_payment_percentage}
                className="my-2"
                message="Meta mínima"
              />
              <div className="space-y-2 pt-4">
                <p className="flex justify-between text-sm">
                  <span className="font-semibold">Investimento Mínimo</span>
                  {formatCurrency(monetary.min_investment_value)}
                </p>
                <p className="flex justify-between text-sm">
                  <span className="font-semibold">Total Captado</span>
                  {formatCurrency(handleWithInvestedValue())}
                </p>
                {due_at && (
                  <p className="flex justify-between text-sm">
                    <span className="font-semibold">Prazo</span>
                    {`${due_at} meses`}
                  </p>
                )}
              </div>
            </>
          )}
        </div>

        <Link
          to={`/oportunidades/${id}`}
          className="absolute bottom-4 left-4 right-4"
        >
          <Button
            variant="outline"
            className="w-full"
          >
            Conferir mais detalhes
          </Button>
        </Link>
      </div>
    </motion.article>
  );
};

export default OpportunityCard; 