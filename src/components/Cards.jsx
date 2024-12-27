import React, { useState, useEffect } from 'react';
import Card from './Card'; 

export const Cards = () => {
  const emojiList = ['😈', '💥', '💧', '🙈', '💖', '💀', '👾', '🔥'];

  const generateCards = () => {
    const doubledEmojis = [...emojiList, ...emojiList];
    return doubledEmojis.sort(() => Math.random() - 0.5); // Shuffle the emojis
  };

  const [cards, setCards] = useState(generateCards());
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [isInitialFlip, setIsInitialFlip] = useState(true); // Track the initial flip state
  const [isGameOver, setIsGameOver] = useState(false); // Track if the game is over

  // Handle card click
  const handleCardClick = (index) => {
    if (flippedIndices.length === 2 || flippedIndices.includes(index) || matchedCards.includes(index)) {
      return; // Do nothing if already flipped or matched
    }

    // Flip the card
    setFlippedIndices((prev) => [...prev, index]);
  };

  // Check if two flipped cards match
  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [firstIndex, secondIndex] = flippedIndices;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedCards((prev) => [...prev, firstIndex, secondIndex]); // Mark as matched
      }
      // Reset after a short delay
      setTimeout(() => setFlippedIndices([]), 500);
    }
  }, [flippedIndices, cards]);

  useEffect(() => {
    if (isInitialFlip) {
      const timer = setTimeout(() => {
        setIsInitialFlip(false); 
      }, 3000);

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [isInitialFlip]);

  // Check if game is over
  useEffect(() => {
    if (matchedCards.length === cards.length) {
      setIsGameOver(true); // Set game over when all cards are matched
    }
  }, [matchedCards, cards.length]);

  const restartGame = () => {
    setCards(generateCards()); 
    setFlippedIndices([]);
    setMatchedCards([]); 
    setIsInitialFlip(true);
    setIsGameOver(false);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="grid grid-cols-4 gap-4 mb-4">
        {cards.map((emoji, index) => {
          const isFlipped = isInitialFlip || flippedIndices.includes(index) || matchedCards.includes(index);
          const isMatched = matchedCards.includes(index); // Check if the card is matched
          
          return (
            <Card
              key={index}
              emoji={emoji}
              isFlipped={isFlipped}
              isMatched={isMatched}  // Pass isMatched to Card component
              onClick={() => handleCardClick(index)}
            />
          );
        })}
      </div>

      {isGameOver && (
        <button 
          onClick={restartGame} 
          className="bg-lightViolet text-tesuoBlue py-2 px-4 rounded-md mt-4 hover:font-bold">
          Play Again
        </button>
      )}
    </div>
  );
};

export default Cards;
