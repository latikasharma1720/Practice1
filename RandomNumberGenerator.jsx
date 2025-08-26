import React, { useState } from 'react';

function RandomNumberGenerator() {
  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandomNumber = () => {
    // Generate a random integer between 1 and 100 (inclusive)
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newRandomNumber);
  };

  return (
    <div>
      <h1>Random Number Generator</h1>
      <p>Current Random Number: {randomNumber}</p>
      <button onClick={generateRandomNumber}>Generate New Number</button>
    </div>
  );
}

export default RandomNumberGenerator;