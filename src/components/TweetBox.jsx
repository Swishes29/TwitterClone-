import React, { useState } from 'react';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import GifIcon from '@mui/icons-material/Gif';
import PollIcon from '@mui/icons-material/Poll';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const TweetBox = ({ addTweet }) => {
  const [tweetContent, setTweetContent] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // Añadido para el indicador de carga

  const handleTweet = () => {
    if (tweetContent.trim()) {
      setIsLoading(true); 
      addTweet({
        id: Date.now(),
        user: 'Kevincito',
        handle: 'KevinGOD',
        avatarUrl: 'https://pbs.twimg.com/profile_images/1734380777427582976/cIDzoFdT_400x400.jpg',
        content: tweetContent,
        time: new Date().toISOString(), 
      });
      setTweetContent('');
      setCharCount(0);
      setIsLoading(false); 
    }
  };

  const handleChange = (e) => {
    setTweetContent(e.target.value);
    setCharCount(e.target.value.length);
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-md">
      <div className="flex items-start space-x-3">
        <img
          src="https://pbs.twimg.com/profile_images/1734380777427582976/cIDzoFdT_400x400.jpg"
          alt="Avatar"
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <textarea
            placeholder="¿Qué está pasando?"
            maxLength={280}
            value={tweetContent}
            onChange={handleChange}
            className="w-full bg-white text-black rounded-lg p-2 mb-2 border border-gray-300 resize-none"
            rows="2"
          />
          <div className="flex justify-between items-center mt-2">
            <div className="flex space-x-4 text-blue-500">
              <InsertPhotoIcon />
              <GifIcon />
              <PollIcon />
              <EmojiEmotionsIcon />
              <ScheduleIcon />
              <LocationOnIcon />
            </div>
            <p className={`text-sm ${charCount > 280 ? 'text-red-500' : 'text-gray-500'}`}>
              {charCount}/280
            </p>
            <button
              onClick={handleTweet}
              disabled={isLoading}
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 disabled:opacity-50"
            >
              {isLoading ? "Cargando..." : "Postear"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetBox;
