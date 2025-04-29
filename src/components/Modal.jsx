import React from 'react';

const Modal = ({ isOpen, onClose, note, onUpdate, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md overflow-auto">
        <h2 className="text-2xl font-bold mb-4 break-words">{note.title}</h2>
        <p className="text-gray-600 mb-6 break-words">{note.content}</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onUpdate}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Update
          </button>
          <button
            onClick={onDelete}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;