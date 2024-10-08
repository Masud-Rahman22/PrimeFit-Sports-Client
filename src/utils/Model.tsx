import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-transparent rounded-lg shadow-lg p-6">
        <button className="absolute top-2 right-2 text-gray-500 text-5xl" onClick={onClose}>
          ✖️
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
