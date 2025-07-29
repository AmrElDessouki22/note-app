import '@/app/globals.css';
import { ReactNode } from 'react';
import { NotesProvider } from '@/contexts/NotesContext';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

export const metadata = {
  title: 'Note App',
  description: 'A comprehensive note-taking application.',
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <NotesProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4">{children}</main>
        <Footer />
      </div>
    </NotesProvider>
  );
};

export default Layout;
