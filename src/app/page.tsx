import React from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import Notes from '@/components/features/Notes';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Notes />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
