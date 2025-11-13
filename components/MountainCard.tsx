
import React from 'react';
import { Mountain } from '../types';

interface MountainCardProps {
  mountain: Mountain;
  index: number;
}

const MountainCard: React.FC<MountainCardProps> = ({ mountain, index }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img 
        src={`https://picsum.photos/seed/${mountain.name_en}/600/400`} 
        alt={`${mountain.name_ko} 이미지`}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{mountain.name_ko}</h2>
        <p className="text-sm text-gray-500 font-medium tracking-wider uppercase mb-3">{mountain.name_en}</p>
        <div className="flex items-center text-gray-700 mb-4">
          <i className="fas fa-mountain mr-2"></i>
          <span>해발 {mountain.height_meters}m</span>
        </div>
        <p className="text-gray-600 leading-relaxed">
          {mountain.description}
        </p>
      </div>
    </div>
  );
};

export default MountainCard;
