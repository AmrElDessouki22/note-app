import React from 'react';
import { NotesProvider } from '@/contexts/NotesContext';
import '@/app/globals.css';

export const metadata = {
  title: 'AI Generated Note App',
  description: 'A note-taking app built with Next.js and TypeScript',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NotesProvider>
          {children}
        </NotesProvider>
      </body>
    </html>
  );
};

export default RootLayout;
