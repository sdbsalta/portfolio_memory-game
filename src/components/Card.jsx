import React from 'react';

const Card = ({ emoji, isFlipped, onClick, isMatched }) => {
  return (
    <div
      onClick={onClick}
      className={`md:text-3xl md:w-24 md:h-24 xs:text-base xs:w-12 xs:h-12 flex items-center justify-center rounded-lg cursor-pointer ${
        isMatched ? 'bg-durantaYellow' : isFlipped ? 'bg-cloudDancer' : 'bg-nordicBreeze'
      }`}
    >
      {isFlipped || isMatched ? emoji : '❓'}
    </div>
  );
};

export default Card;
