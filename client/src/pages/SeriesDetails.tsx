import React from 'react';
import { useRoute } from 'wouter';

const SeriesDetails: React.FC = () => {
  const [, params] = useRoute('/serie/:id');
  
  return (
    <div className="min-h-screen bg-[#141414] text-white pt-24 px-12">
      <h1 className="text-4xl font-bold">Detalhes da Série: {params?.id}</h1>
      <p className="mt-4 text-gray-400">Em breve...</p>
    </div>
  );
};

export default SeriesDetails;
