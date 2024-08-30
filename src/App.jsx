import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import PersonIcon from '@mui/icons-material/Person';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';

// Componente de la barra lateral izquierda
const LeftSideBar = () => {
  return (
    <div className='flex flex-col h-full md:h-[90vh] justify-between mr-4'>
      <div className="mt-6 flex flex-col space-y-2">
        <div className="flex items-center space-x-4 px-2 py-1 hover:bg-slate-200 rounded-full cursor-pointer">
          <TwitterIcon fontSize="large" />
        </div>
        <div className="flex items-center space-x-4 px-2 py-1 hover:bg-slate-200 rounded-full cursor-pointer">
          <HomeIcon fontSize="large" />
          <p>Inicio</p>
        </div>
        <div className="flex items-center space-x-4 px-2 py-1 hover:bg-slate-200 rounded-full cursor-pointer">
          <TagIcon fontSize="large" />
          <p>Tendencias</p>
        </div>
        <div className="flex items-center space-x-4 px-2 py-1 hover:bg-slate-200 rounded-full cursor-pointer">
          <PersonIcon fontSize="large" />
          <p>Perfil</p>
        </div>
        <div className="flex items-center space-x-4 px-2 py-1 hover:bg-slate-200 rounded-full cursor-pointer">
          <NotificationsIcon fontSize="large" />
          <p>Notificaciones</p>
        </div>
        <div className="flex items-center space-x-4 px-2 py-1 hover:bg-slate-200 rounded-full cursor-pointer">
          <EmailIcon fontSize="large" />
          <p>Mensajes</p>
        </div>
        <div className="flex items-center space-x-4 px-2 py-1 hover:bg-slate-200 rounded-full cursor-pointer">
          <MoreHorizIcon fontSize="large" />
          <p>Más Opciones</p>
        </div>
      </div>
    </div>
  );
};

// Componente para escribir y publicar un tweet
const TweetBox = ({ addTweet }) => {
  const [tweetContent, setTweetContent] = useState('');
  const [charCount, setCharCount] = useState(0);

  const handleTweet = () => {
    if (tweetContent.trim()) {
      addTweet({
        user: "Kevincito",
        handle: "@KevinGOD",
        content: tweetContent,
        time: new Date().toLocaleTimeString()
      });
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

// Componente para la barra lateral derecha
const RightSidebar = () => {
  const trends = [
    { title: '#Daviplata', tweets: '12.5K Tweets' },
    { title: '#Petro', tweets: '8.7K Tweets' },
    { title: '#Uribe', tweets: '15.3K Tweets' },
    { title: '#Bancolombia', tweets: '7.9K Tweets' },
  ];

  return (
    <div className="p-6 bg-slate-100 rounded-lg space-y-4">
      <h2 className="font-medium text-xl">Tendencias</h2>
      {trends.map((trend, index) => (
        <div key={index} className="border-b border-gray-200 pb-2 mb-2">
          <p className="font-bold">{trend.title}</p>
          <p className="text-gray-500 text-sm">{trend.tweets}</p>
        </div>
      ))}
    </div>
  );
};

// Componente para mostrar un tweet en el timeline
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

// Componente principal del contenido
const MainContent = () => {
  const [tweets, setTweets] = useState([]);

  const addTweet = (newTweet) => {
    setTweets([newTweet, ...tweets]);
  };

  return (
    <div className="flex flex-col md:flex-row my-5">
      <div className="w-full md:w-1/3 lg:w-1/3 flex-shrink-0">
        <LeftSideBar />
      </div>
      <div className="w-full md:w-1/2 lg:w-9/12 border-x border-gray-200 px-6 flex-shrink-0">
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
      <div className="w-full md:w-1/3 lg:w-1/3 p-4 flex-shrink-0">
        <div className="relative">
          <SearchIcon className="absolute left-4 top-2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar en Twitter"
            className="bg-gray-100 rounded-full py-2 px-12 w-full mb-4 text-lg"
          />
        </div>
        <RightSidebar />
      </div>
    </div>
  );
};

// Componente de la aplicación principal
const App = () => {
  return (
    <div className="flex justify-center">
      <MainContent />
    </div>
  );
};

export default App;
