import React, { useState, useEffect } from "react";
import LeftSideBar from "./LeftSideBar";
import TweetBox from "./TweetBox";
import RightSidebar from "./RightSidebar";
import Tweet from "./Tweet";
import SearchIcon from "@mui/icons-material/Search";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import ConfirmationModal from "./ConfirmationModal"; 


const MainContent = () => {
  const [activeTab, setActiveTab] = useState("Para ti");
  const [tweets, setTweets] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [tweetToDelete, setTweetToDelete] = useState(null); 

  // Cargar los tweets desde la API
  const loadTweets = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/tweets");
      const data = await response.json();
      setTweets(data);
    } catch (error) {
      console.error("Error al cargar los tweets:", error);
    }
  };

  useEffect(() => {
    loadTweets();
  }, []);

  // Función para añadir un tweet
  const addTweet = async (newTweet) => {
    try {
      const response = await fetch("http://localhost:3000/api/tweets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTweet),
      });

      if (response.ok) {
        const createdTweet = await response.json();
        setTweets([createdTweet, ...tweets]); // Añadir el tweet al estado local
        console.log("Tweet publicado correctamente:", createdTweet);
      } else {
        console.error("Error al publicar el tweet");
      }
    } catch (error) {
      console.error("Error al conectar con la API para publicar el tweet:", error);
    }
  };


  const confirmDeleteTweet = (id) => {
    setTweetToDelete(id); 
    setIsModalOpen(true); // Abrir el modal
  };


  const deleteTweet = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/tweets/${tweetToDelete}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setTweets(tweets.filter((tweet) => tweet.id !== tweetToDelete)); // Filtrar el tweet eliminado
        console.log("Tweet eliminado correctamente");
      } else {
        console.error("Error al eliminar el tweet");
      }
    } catch (error) {
      console.error("Error al conectar con la API para eliminar el tweet:", error);
    }

    setIsModalOpen(false); 
    setTweetToDelete(null); 
  };

  return (
    <div className="grid grid-cols-12 gap-4 my-5 max-w-7xl mx-auto">
      <div className="col-span-3">
        <LeftSideBar />
      </div>

      <div className="col-span-6 border-x border-gray-200 px-6 bg-white text-black">
        <div className="col-span-6 border-x border-gray-200 px-6 bg-white text-black">
          <div className="flex items-center py-2 border-b border-gray-200">
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

            <StarBorderPurple500Icon className="ml-auto text-gray-500" />
          </div>
        </div>

        {/* Pasamos la función addTweet al TweetBox */}
        <TweetBox addTweet={addTweet} />

        <div>
          {tweets.map((tweet) => (
            <Tweet
              key={tweet.id}
              tweet={tweet}
              deleteTweet={() => confirmDeleteTweet(tweet.id)} 
            />
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

      {/* Modal de confirmación */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Cerrar modal si se cancela
        onConfirm={deleteTweet} // Eliminar tweet si se confirma
      />
    </div>
  );
};

export default MainContent;
