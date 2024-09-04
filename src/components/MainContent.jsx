import React, { useState } from 'react';
import LeftSideBar from './LeftSideBar';
import TweetBox from './TweetBox';
import RightSidebar from './RightSidebar';
import Tweet from './Tweet';
import SearchIcon from '@mui/icons-material/Search';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';

const MainContent = () => {
  const [tweets, setTweets] = useState([]);

  const addTweet = (newTweet) => {
    setTweets([newTweet, ...tweets]);
  };

  return (
    <div className="grid grid-cols-12 gap-4 my-5 max-w-7xl mx-auto">
      <div className="col-span-3">
        <LeftSideBar />
      </div>
      <div className="col-span-6 border-x border-gray-200 px-6">
        <div className="flex justify-between items-center py-4">
          <h2 className="font-bold text-2xl cursor-pointer hover:text-blue-500 transition-colors duration-200">
            Para ti
          </h2>
          <h2 className="font-bold text-2xl cursor-pointer hover:text-blue-500 transition-colors duration-200">
            Siguiendo
          </h2>
          <StarBorderPurple500Icon />
        </div>
        <TweetBox addTweet={addTweet} />
        <div>
          {tweets.map((tweet, index) => (
            <Tweet key={index} tweet={tweet} />
          ))}
        </div>
      </div>
      <div className="col-span-3 p-4">
        <div className="relative mb-4">
          <SearchIcon className="absolute left-4 top-2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar en Twitter"
            className="bg-gray-100 rounded-full py-2 px-12 w-full text-lg"
          />
        </div>
        <RightSidebar />
      </div>
    </div>
  );
};

export default MainContent;
