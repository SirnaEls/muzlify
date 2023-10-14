"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./searchBar";

const apiKey = "AIzaSyC6zuRbo4Ki-5KkcXVWJUrx6oMDJEGzW_E"; // Remplacez par votre propre clé API

export default function Videos() {
  const [videos, setVideos] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("Siedd");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://youtube.googleapis.com/youtube/v3/search?",
          {
            params: {
              part: "snippet",
              maxResults: 10,
              q: searchQuery, // Votre recherche
              key: apiKey,
            },
          }
        );
        setVideos(response.data.items.slice(1));
      } catch (error) {
        console.error("Erreur lors de la récupération des vidéos : ", error);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchBar onSearch={handleSearch} />

      <ul className="flex flex-col gap-5">
        {videos.map((video) => (
          <li
            className="border flex flex-col gap-2.5 justify-center items-center p-2.5 rounded-[30px] border-solid border-[white]"
            key={video.id}
          >
            <h2>{video.snippet.title}</h2>
            <iframe
              className="rounded-[30px] md:w-full"
              title={video.snippet.title}
              width="350"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              allowFullScreen
            ></iframe>
          </li>
        ))}
      </ul>
    </div>
  );
}
