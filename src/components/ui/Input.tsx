"use client";

import { useState } from 'react';
import Button from '@/components/ui/Button';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onAddNote?: () => void;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, onAddNote }) => {
  const [note, setNote] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const handleAddNote = () => {
    if (note.trim()) {
      onAddNote?.();
      setNote('');
    }
  };

  return (
    <div>
      <input
        value={note}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="input"
      />
      <Button onClick={handleAddNote}>Add Note</Button>
    </div>
  );
};

export default Input;
