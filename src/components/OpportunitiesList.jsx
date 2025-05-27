import React, { useEffect, useState } from 'react';
import OpportunityCard from './OpportunityCard';
import { Loading } from '@/components/ui/loading';

const OpportunitiesList = ({ type = 'active' }) => {
  const [opportunities, setOpportunities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/opportunities/${type}`
        );
        const data = await response.json();
        setOpportunities(data);
      } catch (error) {
        console.error('Erro ao buscar oportunidades:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOpportunities();
  }, [type]);

  if (isLoading) {
    return (
      <div className="h-[466px] flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (!opportunities.length) {
    return (
      <article className="group relative flex h-[466px] w-full min-w-[17rem] max-w-[288px] flex-shrink-0 flex-col items-start border border-border rounded-lg shadow-sm">
        <div className="mx-auto h-auto w-full overflow-hidden p-5 blur-sm">
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 bg-primary rounded-full"></div>
            <span className="text-sm text-primary truncate max-w-[13rem]">
              em breve
            </span>
          </div>
          <figure className="relative h-[10rem] w-full mt-2">
            Em breve
          </figure>
          <div className="relative flex h-full flex-col pt-2">
            <h3 className="line-clamp-1 text-left text-base font-normal">
              Em breve
            </h3>
            <div className="space-y-2 pt-4">
              <p className="flex justify-between text-sm">
                <span className="font-semibold">Meta</span>
                R$ XX,XX
              </p>
              <p className="flex justify-between text-sm">
                <span className="font-semibold">Valor investido</span>
                R$ XX,XX
              </p>
              <p className="flex justify-between text-sm">
                <span className="font-semibold">Investimento mínimo</span>
                R$ XX,XX
              </p>
              <p className="flex justify-between text-sm">
                <span className="font-semibold">Disponível</span>
                R$ XX,XX
              </p>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col mt-[8rem] self-center">
          <h1 className="text-xl font-bold text-center">
            Em Breve
          </h1>
          <div className="mt-[15rem] px-4">
            <span className="block w-full text-center text-sm font-medium border p-4 rounded-md">
              Oportunidade em {import.meta.env.VITE_INCOMING_OPPORTUNITY}
            </span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[95vw]">
      <div className="flex gap-4 overflow-x-auto pb-4">
        {opportunities.map((opportunity) => (
          <OpportunityCard
            key={opportunity.id}
            opportunity={opportunity}
          />
        ))}
      </div>
    </div>
  );
};

export default OpportunitiesList; 