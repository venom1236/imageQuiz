import React, { useState } from 'react';

const SentenceEditor = ({  }) => {
    let sentence = "what is your nick name";
    let prompts = prompt("what is your nick name");
  const [selectedWords, setSelectedWords] = useState([]);
  const [highlightedWords, setHighlightedWords] = useState({});
  const handleSelect = (word) => {
    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter((w) => w !== word));
    } else {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const handleReset = () => {
    setSelectedWords([]);
  };

  return (
    <div>
      <h2>{prompt}</h2>
      <p>
        {sentence.split(' ').map((word, index) => (
          <span
            key={index}
            onClick={() => handleSelect(word)}
            style={{
              backgroundColor: highlightedWords[word] ? 'yellow' : 'white',
              cursor: 'pointer',
            }}
          >
            {word}
          </span>
        ))}
      </p>
      <button onClick={handleReset}>Reset Selection</button>
    </div>
  );
};

export default SentenceEditor;