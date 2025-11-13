
import React, { useState, useEffect } from 'react';
import { Mountain } from './types';
import { fetchSeoulMountains } from './services/geminiService';
import Header from './components/Header';
import MountainCard from './components/MountainCard';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [mountains, setMountains] = useState<Mountain[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMountains = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchSeoulMountains();
        setMountains(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("알 수 없는 오류가 발생했습니다.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadMountains();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return <Loader />;
    }

    if (error) {
      return <ErrorMessage message={error} />;
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mountains.map((mountain, index) => (
          <MountainCard key={mountain.name_en} mountain={mountain} index={index} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
