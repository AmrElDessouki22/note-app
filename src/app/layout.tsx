import React from 'react';
import { NotesProvider } from '@/contexts/NotesContext';
import '@/app/globals.css';

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