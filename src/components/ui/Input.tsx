"use client";

import { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@/components/ui/Button';

interface InputProps {
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ placeholder }) => {
  const [value, setValue] = useState('');
  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    router.push({
      pathname: '/',
      query: { note: value },
    });
    setValue('');
  };

  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input"
        style={{ color: 'black' }}
      />
      <Button onClick={onClick}>Add Note</Button>
    </div>
  );
};

export default Input;
