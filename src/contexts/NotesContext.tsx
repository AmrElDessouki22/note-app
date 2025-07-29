"use client";

import { createContext, useState } from 'react';
import { Note } from '../types';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

interface NotesContextProps {
  notes: Note[];
  addNote: (text: string) => void;
}

export const NotesContext = createContext<NotesContextProps>({
  notes: [],
  addNote: () => {},
});

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addNote = (text: string) => {
    const newNote: Note = { id: Date.now(), text };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    setInputValue('');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddNote = () => {
    if (inputValue.trim() !== '') {
      addNote(inputValue);
    }
  };

  return (
    <NotesContext.Provider value={{ notes, addNote }}>
      <Input value={inputValue} onChange={handleInputChange} />
      <Button onClick={handleAddNote}>Add Note</Button>
      {children}
    </NotesContext.Provider>
  );
};
