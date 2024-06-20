import React, { useState } from 'react';

const ImageQuiz = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [message, setMessage] = useState('');

  const images = [
    { id: 1, src: 'https://i.pinimg.com/564x/85/8c/9f/858c9fbceb5d93548c7530dd1c9ae682.jpg', correct: false },
    { id: 2, src: 'https://png.pngtree.com/png-clipart/20230917/original/pngtree-woman-holding-baby-is-a-mother-icon-on-flat-colored-background-png-image_12273842.png', correct: false },
    { id: 3, src: 'https://cdn-icons-png.freepik.com/512/7057/7057760.png', correct: true },
    { id: 4, src: 'https://cdn.iconscout.com/icon/free/png-256/free-brother-1735100-1471636.png?f=webp', correct: false }
  ];

  const handleImageClick = (imageId) => {
    setSelectedImage(imageId);

    const selectedImageObj = images.find(img => img.id === imageId);
    if (selectedImageObj.correct) {
      setMessage('Correct answer! Well done.');
    } else {
      setMessage('Wrong answer. Please try again.');
    }
  };

  return (
    <div className=''>
        <h1 className='headline'>This is MY Father</h1>
      <div className='box'>
        {images.map(image => (
         <div className='box2'>
             <img
            key={image.id}
            src={image.src}
            alt={`Option ${image.id}`}
            style={{ width: '150px', margin: '10px', cursor: 'pointer', border: selectedImage === image.id ? '2px solid blue' : 'none' }}
            onClick={() => handleImageClick(image.id)}
          />
         </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {message && <p className={message==='Correct answer! Well done.'? 'text-success' :'text-danger'}>{message}</p>}
      </div>
    </div>
  );
};

export default ImageQuiz;
