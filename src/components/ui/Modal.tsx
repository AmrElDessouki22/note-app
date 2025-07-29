'use client';

import React from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-md">
        {children}
        <button onClick={onClose} className="mt-4 bg-red-500 text-white p-2 rounded">Close</button>
      </div>
    </div>
  );
};

export default Modal;