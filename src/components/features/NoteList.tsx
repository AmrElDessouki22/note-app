'use client';

import React, { useState } from 'react';
import { NotesContext } from '@/contexts/NotesContext';
import NoteItem from './NoteItem';
import { Button } from '@/components/ui/Button';

const NoteList: React.FC = () => {
  const { notes, addNote } = React.useContext(NotesContext);
  const [newNote, setNewNote] = useState('');

  const handleAddNote = () => {
    addNote(newNote);
    setNewNote('');
  };

  return (
    <div className="p-4">
      <input 
        type="text" 
        value={newNote} 
        onChange={(e) => setNewNote(e.target.value)} 
        placeholder="Add a new note" 
        style={{ color: 'black' }} 
      />
      <Button onClick={handleAddNote}>Add Note</Button>
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