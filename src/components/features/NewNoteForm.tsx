"use client";

import { useState, useContext } from 'react';
import { NotesContext } from '../../contexts/NotesContext';
import Button from '../ui/Button';
import Input from '../ui/Input';

const NewNoteForm = () => {
  const [noteText, setNoteText] = useState('');
  const { addNote } = useContext(NotesContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoteText(e.target.value);
  };

  const handleAddNote = () => {
    if (noteText.trim() !== '') {
      addNote(noteText);
      setNoteText('');
    }
  };

  return (
    <div className="new-note-form">
      <Input 
        value={noteText} 
        onChange={handleInputChange} 
        placeholder="Enter a new note" 
        style={{ color: 'black' }} 
      />
      <Button onClick={handleAddNote}>Add Note</Button>
    </div>
  );
};

export default NewNoteForm;
