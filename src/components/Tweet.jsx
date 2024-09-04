import React from 'react';

const Tweet = ({ tweet }) => {
  return (
    <div className="flex border-b border-gray-200 py-4">
      <img
        src="https://pbs.twimg.com/profile_images/1734380777427582976/cIDzoFdT_400x400.jpg"
        alt="Avatar"
        className="w-10 h-10 rounded-full mr-3"
      />
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <span className="font-bold">{tweet.user}</span>
          <span className="text-gray-500">{tweet.handle}</span>
          <span className="text-gray-400">• {tweet.time}</span>
        </div>
        <p className="mt-1">{tweet.content}</p>
      </div>
    </div>
  );
};

export default Tweet;
