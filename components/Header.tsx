
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          서울의 아름다운 산
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          도심 속에서 자연의 숨결을 느낄 수 있는 서울의 명산을 만나보세요.
        </p>
      </div>
    </header>
  );
};

export default Header;
