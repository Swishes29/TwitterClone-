import React, { useState } from 'react';
import TweetIcon from '@mui/icons-material/ModeEdit'; // Un ícono de ejemplo

const TweetBox = ({ addTweet }) => {
  const [tweetContent, setTweetContent] = useState('');
  const [charCount, setCharCount] = useState(0);

  const handleTweet = () => {
    if (tweetContent.trim()) {
      addTweet(tweetContent);
      setTweetContent('');
      setCharCount(0);
    }
  };

  const handleChange = (e) => {
    setTweetContent(e.target.value);
    setCharCount(e.target.value.length);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
      <div className="flex items-start space-x-3">
        <img
          src="https://via.placeholder.com/50" // Imagen de perfil ficticia
          alt="Avatar"
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <textarea
            placeholder="¿Qué está pasando?"
            maxLength={280}
            value={tweetContent}
            onChange={handleChange}
            className="w-full bg-gray-100 rounded-lg p-2 mb-2 border border-gray-300 resize-none"
            rows="4"
          />
          <div className="flex justify-between items-center">
            <p className={`text-sm ${charCount > 280 ? 'text-red-500' : 'text-gray-500'}`}>
              {charCount}/280
            </p>
            <button
              onClick={handleTweet}
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetBox;
