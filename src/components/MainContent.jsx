import React, { useState } from "react";
import LeftSideBar from "./LeftSideBar";
import TweetBox from "./TweetBox";
import RightSidebar from "./RightSidebar";
import Tweet from "./Tweet";
import SearchIcon from "@mui/icons-material/Search";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";

const MainContent = () => {
  const [activeTab, setActiveTab] = useState("Para ti");

  const initialTweets = [
    {
      id: 1,
      user: "Kevincito",
      handle: "KevinGOD",
      avatarUrl:
        "https://pbs.twimg.com/profile_images/1734380777427582976/cIDzoFdT_400x400.jpg",
      content: "Este es mi primer tweet!",
      time: "10:00 AM",
    },
    {
      id: 2,
      user: "Donald Trumpas",
      handle: "JDonald",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCxq9w8vgG8UVWAj43FSiv7gqQ2EvGuNzUSQ&s",
      content: "Hola, mundo!",
      time: "10:30 AM",
    },
  ];

  const [tweets, setTweets] = useState(initialTweets);

  const addTweet = (newTweet) => {
    setTweets([newTweet, ...tweets]);
  };

  const deleteTweet = (id) => {
    setTweets(tweets.filter((tweet) => tweet.id !== id));
  };

  return (
    <div className="grid grid-cols-12 gap-4 my-5 max-w-7xl mx-auto">
      <div className="col-span-3">
        <LeftSideBar />
      </div>

      <div className="col-span-6 border-x border-gray-200 px-6 bg-white text-black">
        <div className="col-span-6 border-x border-gray-200 px-6 bg-white text-black">
          <div className="flex items-center py-2 border-b border-gray-200">
            {/* Título "Para ti" */}
            <h2
              onClick={() => setActiveTab("Para ti")}
              className={`flex-1 text-center font-bold text-base cursor-pointer transition-colors duration-200 ${
                activeTab === "Para ti"
                  ? "text-black border-b-4 border-blue-500"
                  : "text-gray-500"
              }`}
            >
              Para ti
            </h2>

            {/* Título "Siguiendo" */}
            <h2
              onClick={() => setActiveTab("Siguiendo")}
              className={`flex-1 text-center font-bold text-base cursor-pointer transition-colors duration-200 ${
                activeTab === "Siguiendo"
                  ? "text-black border-b-4 border-blue-500"
                  : "text-gray-500"
              }`}
            >
              Siguiendo
            </h2>

            {/* Ícono de estrella */}
            <StarBorderPurple500Icon className="ml-auto text-gray-500" />
          </div>
        </div>

        <TweetBox addTweet={addTweet} />

        <div>
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} deleteTweet={deleteTweet} />
          ))}
        </div>
      </div>

      <div className="col-span-3 p-4">
        <div className="relative mb-4">
          <SearchIcon className="absolute left-4 top-2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar en Twitter"
            className="bg-gray-100 text-black rounded-full py-2 px-12 w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <RightSidebar />
      </div>
    </div>
  );
};

export default MainContent;
