import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DetailedProgressBar from '@/components/ui/detailed-progress-bar';
import { formatCurrency } from '@/utils/currency';
import { apiUrl } from '@/config/env';

const OpportunityDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [opportunity, setOpportunity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOpportunity = async () => {
      try {
        const response = await fetch(`${apiUrl}/opportunities/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch opportunity details');
        }
        const result = await response.json();
        setOpportunity(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOpportunity();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (error || !opportunity) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-destructive mb-4">Error: {error || 'Opportunity not found'}</p>
        <Button onClick={() => navigate(-1)}>Voltar</Button>
      </div>
    );
  }

  const progress = {
    confirmed: opportunity.goal.confirmed_payment_percentage,
    awaiting: opportunity.goal.percentage_awaiting_payment,
    total: opportunity.goal.confirmed_payment_percentage + opportunity.goal.percentage_awaiting_payment
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button
          variant="ghost"
          className="mb-8"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Imagem e Informações Básicas */}
          <div className="space-y-6">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src={opportunity.image}
                alt={opportunity.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl font-bold">{opportunity.name}</h1>
              <p className="text-muted-foreground">{opportunity.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-muted">
                  <p className="text-sm text-muted-foreground">Segmento</p>
                  <p className="font-medium">{opportunity.segment}</p>
                </div>
                <div className="p-4 rounded-lg bg-muted">
                  <p className="text-sm text-muted-foreground">Modalidade</p>
                  <p className="font-medium capitalize">{opportunity.modality}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Detalhes do Investimento */}
          <div className="space-y-8">
            <div className="p-6 rounded-lg border bg-card">
              <h2 className="text-xl font-semibold mb-6">Detalhes do Investimento</h2>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Valor Total</span>
                    <span className="font-medium">{formatCurrency(opportunity.goal.max_goal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Valor Mínimo</span>
                    <span className="font-medium">{formatCurrency(opportunity.monetary.min_investment_value)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Participação</span>
                    <span className="font-medium">{opportunity.modality_data.participation}%</span>
                  </div>
                </div>

                <DetailedProgressBar
                  value={progress}
                  message="Progresso do Investimento"
                />

                <div className="pt-4 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Status</span>
                    <span className="capitalize">{opportunity.status}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Data de Encerramento</span>
                    <span>{new Date(opportunity.due_at).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>

            <Button className="w-full" size="lg">
              Investir Agora
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OpportunityDetailsPage; 