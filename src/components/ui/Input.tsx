'use client';

import React from 'react';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
  return (
    <input 
      type="text" 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder}
      className="border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
    />
  );
};

export default Input;