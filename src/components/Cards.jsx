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

  // Initial flip for 5 seconds
  useEffect(() => {
    if (isInitialFlip) {
      const timer = setTimeout(() => {
        setIsInitialFlip(false); // Unflip cards after 5 seconds
      }, 3000); // 5000ms = 5 seconds

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [isInitialFlip]);

  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-4 gap-4">
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
    </div>
  );
};

export default Cards;
