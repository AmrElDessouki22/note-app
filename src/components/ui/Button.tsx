'use client';

import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export default function Button({ label, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
    >
      {label}
    </button>
  );
}
