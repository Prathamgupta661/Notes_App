import React from 'react';

const Card = ({ title, content, onClick }) => {
  return (
    <div
      className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition h-full "
      onClick={onClick} // Trigger modal on click
    >
      <h5 className="mb-2 text-xl font-bold text-gray-800">{title}</h5>
      <p className="text-gray-600 line-clamp-3 p-3 flex-wrap max-w-full text-wrap">{content}</p>
    </div>
  );
};

export default Card;