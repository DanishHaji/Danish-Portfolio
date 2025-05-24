import React from 'react';
import CollaborationCard from './CollaborationCard';

const CardGrid = () => {
  return (
    <div className="space-y-10 p-6">
      {/* Collaboration Card */}
      <div className="bg-purple-950 p-6 rounded-lg shadow-lg">
        <CollaborationCard />
      </div>
    </div>
  );
};

export default CardGrid;
