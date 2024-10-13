import React from 'react';
import {
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  ArrowUpTrayIcon,
  TrashIcon
} from '@heroicons/react/24/outline';
import { formatDistanceToNow, format } from 'date-fns'; // Importamos las funciones para formatear la fecha
import { es } from 'date-fns/locale'; // Localización en español

const Tweet = ({ tweet, deleteTweet, onShare }) => {

  // Función para formatear la fecha
  const formatDate = (isoString) => {
    const tweetDate = new Date(isoString);
    const now = new Date();

    // Si el tweet es de hoy
    if (tweetDate.toDateString() === now.toDateString()) {
      return format(tweetDate, 'HH:mm'); // Solo hora si es hoy
    }

    // Si es de hace menos de 7 días
    if ((now - tweetDate) / (1000 * 60 * 60 * 24) < 7) {
      return formatDistanceToNow(tweetDate, { addSuffix: true, locale: es }); // Hace X horas, minutos
    }

    // Si es de hace más de 7 días, pero del mismo año
    if (tweetDate.getFullYear() === now.getFullYear()) {
      return format(tweetDate, "d 'de' MMM", { locale: es }); // Fecha con día y mes
    }

    // Si es de otro año
    return format(tweetDate, "d 'de' MMM yyyy", { locale: es }); // Fecha completa con año
  };

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
          {/* Formateamos la fecha aquí */}
          <span className="text-gray-400">• {formatDate(tweet.time)}</span>
        </div>
        <p className="mt-1 text-gray-800">{tweet.content}</p>
        <div className="mt-2 flex space-x-8 text-gray-500">
          <button className="flex items-center space-x-1 hover:text-blue-500">
            <ChatBubbleOvalLeftIcon className="h-5 w-5" />
            <span className="text-sm">Responder</span>
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
            <span className="text-sm">Compartir</span>
          </button>
          <button
            onClick={() => deleteTweet(tweet.id)}
            className="flex items-center space-x-1 hover:text-red-500"
          >
            <TrashIcon className="h-5 w-5" />
            <span className="text-sm">Eliminar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
