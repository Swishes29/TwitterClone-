import React from 'react';
import {
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  ArrowUpTrayIcon,
  TrashIcon
} from '@heroicons/react/24/outline';

const Tweet = ({ tweet, deleteTweet, onShare }) => {
  return (
    <div className="flex flex-col sm:flex-row border-b border-gray-200 py-4 hover:bg-gray-50 cursor-pointer px-4">
      <img
        src={tweet.avatarUrl}
        alt={`Avatar de ${tweet.user}`}
        className="w-10 h-10 rounded-full mr-3"
      />
      <div className="flex-1">
        <div className="flex flex-wrap items-center space-x-2">
          <a href={`/user/${tweet.handle}`} className="font-bold hover:underline">
            {tweet.user}
          </a>
          <span className="text-gray-500">@{tweet.handle}</span>
          <span className="text-gray-400">• {tweet.time}</span>
        </div>
        <p className="mt-1 text-gray-800">{tweet.content}</p>
        <div className="mt-2 flex space-x-8 text-gray-500">
          <button className="flex items-center space-x-1 hover:text-blue-500">
            <ChatBubbleOvalLeftIcon className="h-5 w-5" />
            <span className="text-sm">Reply</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-green-500">
            <ArrowPathRoundedSquareIcon className="h-5 w-5" />
            <span className="text-sm">Retweet</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-red-500">
            <HeartIcon className="h-5 w-5" />
            <span className="text-sm">Like</span>
          </button>

       
          <button
            onClick={onShare}
            className="flex items-center space-x-1 hover:text-blue-500"
          >
            <ArrowUpTrayIcon className="h-5 w-5" />
            <span className="text-sm">Share</span>
          </button>

          <button
            onClick={() => deleteTweet(tweet.id)}
            className="flex items-center space-x-1 hover:text-red-500"
          >
            <TrashIcon className="h-5 w-5" />
            <span className="text-sm">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
