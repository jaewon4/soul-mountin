
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      <p className="mt-4 text-lg text-gray-600">서울의 산 정보를 불러오는 중...</p>
    </div>
  );
};

export default Loader;
