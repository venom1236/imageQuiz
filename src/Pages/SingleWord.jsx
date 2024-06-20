import React, { useState, useRef } from 'react';

const SingleWord = () => {
  const [userInput, setUserInput] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const correctSentence = "hello";

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userInput.trim().toLowerCase() === correctSentence.toLowerCase()) {
      setValidationMessage('Correct! Well done.');
    } else {
      setValidationMessage('Incorrect. Please try again.');
    }
  };

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div className='displayflex'>
      <h2>Listen to the Word and type it:</h2>
      <audio ref={audioRef} src="/Audio1.mpeg" />
      <div>
        <button onClick={handlePlay} disabled={isPlaying}>
          Play Audio
        </button>
        <button onClick={handlePause} disabled={!isPlaying}>
          Pause Audio
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Type the sentence you heard:
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            disabled={!isPlaying}
            required
          />
        </label>
        <button type="submit" disabled={!isPlaying}>
          Submit
        </button>
      </form>
      <p className={validationMessage==='Correct! Well done.'? 'text-success' :'text-danger'}>{validationMessage}</p>
    </div>
  );
};

export default SingleWord;
