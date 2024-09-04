import React, { useState } from 'react';

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing
    ? 'bg-gray-200 text-black font-semibold py-1 px-3 rounded-full hover:bg-gray-300 transition duration-300'
    : 'bg-blue-500 text-white font-semibold py-1 px-3 rounded-full hover:bg-blue-600 transition duration-300';

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="flex items-center justify-between p-3 bg-white border border-gray-300 rounded-lg shadow-sm">
      <header className="flex items-center gap-3">
        <img
          className="w-10 h-10 rounded-full border border-gray-200"
          alt={`Avatar de ${userName}`}
          src={`https://unavatar.io/${userName}`}
        />
        <div className="flex flex-col">
          <strong className="font-bold text-gray-900 leading-tight">{children}</strong>
          <span className="text-gray-500 text-sm">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
