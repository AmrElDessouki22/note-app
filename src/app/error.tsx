'use client';

import { ReactNode } from 'react';

interface ErrorBoundaryProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export default function ErrorBoundary({ error, resetErrorBoundary }: ErrorBoundaryProps) {
  return (
    <div role="alert" className="p-4 bg-red-100 text-red-700">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
