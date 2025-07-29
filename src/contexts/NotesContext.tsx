'use client';

import React, { createContext, useContext, useState } from 'react';
import { Note } from '@/types';
import { generateId } from '@/lib/utils';

interface NotesContextProps {
  notes: Note[];
  addNote: (content: string) => void;
  deleteNote: (id: string) => void;
}

const NotesContext = createContext<NotesContextProps | undefined>(undefined);

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (content: string) => {
    setNotes(current => [...current, { id: generateId(), content }]);
  };

  const deleteNote = (id: string) => {
    setNotes(current => current.filter(note => note.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = (): NotesContextProps => {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};
