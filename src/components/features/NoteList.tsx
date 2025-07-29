'use client';

import React from 'react';
import { useNotes } from '@/contexts/NotesContext';
import NoteItem from './NoteItem';

const NoteList: React.FC = () => {
  const { notes } = useNotes();

  return (
    <div className="p-4">
      {notes.length === 0 ? (
        <p>No notes available. Create some!</p>
      ) : (
        <ul>
          {notes.map(note => (
            <NoteItem key={note.id} note={note} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default NoteList;