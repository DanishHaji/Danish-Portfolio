import React from 'react';
import CollaborationCard from './CollaborationCard';
// You can import additional card components here, e.g.:
// import TimezoneCard from './TimezoneCard';
// import TechEnthusiastCard from './TechEnthusiastCard';

const CardGrid = () => {
  return (
    // Using a vertical spacing container; you could switch to
    // a grid layout if you want multiple cards per row.
    <div className="space-y-10 p-6">
      
      {/* Collaboration Card */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <CollaborationCard />
      </div>
      
      {/* Timezone Card Placeholder */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* Replace this with your actual TimezoneCard component */}
        <div className="text-white text-center">
          <h2 className="text-xl font-bold">Timezone Communications</h2>
          <p className="mt-4">Remote - India - 16:33</p>
        </div>
      </div>
      
      {/* Tech Enthusiast Card Placeholder */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* Replace this with your actual TechEnthusiastCard component */}
        <div className="text-white text-center">
          <h2 className="text-xl font-bold">Tech Enthusiast</h2>
          <p className="mt-4">Passionate about cutting-edge development technologies</p>
        </div>
      </div>
      
      {/* Additional cards can be placed here in the same fashion */}
      
    </div>
  );
};

export default CardGrid;