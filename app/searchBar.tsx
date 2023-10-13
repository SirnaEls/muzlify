"use client";
import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="flex gap-5 mb-5 flex-col sm:flex-row">
      <input
        type="text"
        placeholder="Rechercher une vidéo..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-white-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent"
      />
      <button
        onClick={handleSearch}
        className="rounded-lg bg-blue-300 py-2 px-2 sm:w-auto"
      >
        Rechercher
      </button>
    </div>
  );
};

export default SearchBar;
