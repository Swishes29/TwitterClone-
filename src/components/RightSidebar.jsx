import React from 'react';
import { TwitterFollowCard } from './TwitterFollowCard';

const RightSidebar = () => {
  const trends = [
    { title: '#Daviplata', tweets: '12.5K Tweets' },
    { title: '#Petro', tweets: '8.7K Tweets' },
    { title: '#Uribe', tweets: '15.3K Tweets' },
    { title: '#Bancolombia', tweets: '7.9K Tweets' },
  ];

  const users = [
    {
      userName: 'SwishesBS',
      name: 'Kevin Pedraos',
      isFollowing: false
    },
    {
      userName: 'midudev',
      name: 'Miguel Durán.',
      isFollowing: false
    }
  ];

  return (
    <div className="p-6 bg-slate-100 rounded-lg space-y-4">
      <h2 className="font-medium text-xl">Tendencias</h2>
      {trends.map((trend, index) => (
        <TrendItem key={index} title={trend.title} tweets={trend.tweets} />
      ))}

      <h2 className="font-medium text-xl mt-6">A quién seguir</h2>
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </div>
  );
};

const TrendItem = ({ title, tweets }) => (
  <div className="border-b border-gray-200 pb-2 mb-2">
    <p className="font-bold">{title}</p>
    <p className="text-gray-500 text-sm">{tweets}</p>
  </div>
);

export default RightSidebar;
