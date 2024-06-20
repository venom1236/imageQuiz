import React, { useState } from 'react';

const WordValidator = () => {
  const [word, setWord] = useState('hello how are you');
  const [inputValue, setInputValue] = useState(''); 
  const [message, setMessage] = useState(null); 

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue === word) {
      setMessage('Congratulations! You typed the correct word!');
    } else {
      setMessage('Sorry, that is not the correct word.');
    }
  };

  return (
    <div className='project4'>
      <h1>{word}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      {message && <p className={message==='Congratulations! You typed the correct word!'? 'text-success' :'text-danger'}>{message}</p>}
    </div>
  );
};

export default WordValidator;