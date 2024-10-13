import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchTweets = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value); // Pasamos la búsqueda al componente padre
  };

  return (
    <div className="relative mb-4">
      <SearchIcon className="absolute left-4 top-2 text-gray-400" />
      <input
        type="text"
        placeholder="Buscar en Twitter"
        value={searchQuery}
        onChange={handleSearch}
        className="bg-gray-100 text-black rounded-full py-2 px-12 w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchTweets;
