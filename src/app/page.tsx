import React from 'react';
import Header from '@/components/ui/Header';
import Sidebar from '@/components/ui/Sidebar';
import NoteList from '@/components/features/NoteList';

const HomePage: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1">
        <Header title="My Notes" />
        <NoteList />
      </main>
    </div>
  );
};

export default HomePage;