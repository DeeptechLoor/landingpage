import React, { useEffect, useState } from 'react';
import OpportunityCard from './opportunity-card';
import Carousel from './ui/carousel';
import { apiUrl } from '../config/env';

const OpportunitiesList = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const response = await fetch(`${apiUrl}/opportunities/active`);
        if (!response.ok) {
          throw new Error('Failed to fetch opportunities');
        }
        const result = await response.json();
        console.log('API Response:', result); // Debug log
        setOpportunities(result.data || []);
      } catch (err) {
        console.error('Error fetching opportunities:', err); // Debug log
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOpportunities();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-destructive">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!opportunities || opportunities.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-muted-foreground">Nenhuma oportunidade disponível no momento.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Oportunidades de Investimento</h2>
        <p className="text-muted-foreground">
          Conheça nossas oportunidades de investimento disponíveis
        </p>
      </div>

      <Carousel items={opportunities}>
        {(opportunity) => (
          <div className="w-[350px] flex-shrink-0">
            <OpportunityCard opportunity={opportunity} />
          </div>
        )}
      </Carousel>
    </div>
  );
};

export default OpportunitiesList; 