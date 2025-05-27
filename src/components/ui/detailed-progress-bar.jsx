import React from 'react';
import { Progress } from './progress';

const DetailedProgressBar = ({ value, message, className }) => {
  const { confirmed, awaiting, total } = value;

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex justify-between text-sm">
        <span>{message}</span>
        <span>{total}%</span>
      </div>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="absolute left-0 top-0 h-full bg-primary transition-all"
          style={{ width: `${confirmed}%` }}
        />
        <div
          className="absolute left-0 top-0 h-full bg-primary/50 transition-all"
          style={{ width: `${awaiting}%`, marginLeft: `${confirmed}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Confirmado: {confirmed}%</span>
        <span>Aguardando: {awaiting}%</span>
      </div>
    </div>
  );
};

export default DetailedProgressBar; 