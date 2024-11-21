import React, { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import GifGrid from "./components/GifGrid";
import LoadMoreButton from "./components/LoadMoreButton";
import SearchBar from "./components/SearchBar";
import './App.css';  // Global CSS

export default function App() {
  const [gifs, setGifs] = useState([]);
  const [page, setPage] = useState(1);
  const [activeTab, setActiveTab] = useState("home");
  const ref = useRef("");

  const API_KEY = "8Dai1t3wfYKMWk9D8MUoAKVfAyR1dcR3";

  // Fetch Gifs Helper Function
  async function fetchGifs(url, reset = false) {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    setGifs((prev) => (reset ? result.data : [...prev, ...result.data]));
  }

  // Search Gifs Logic
  function searchGifs(reset = false) {
    if (activeTab === "trending") {
      fetchTrending();
      return;
    }

    if (reset) {
      setGifs([]);
      setPage(1); // Reset pagination
    }

    const searchText = ref.current.value;
    const url = `https://api.giphy.com/v1/stickers/search?api_key=${API_KEY}&q=${searchText}&limit=20&offset=${(page - 1) * 20}&rating=g&lang=en`;
    fetchGifs(url, reset);
  }

  // Fetch Trending Gifs
  function fetchTrending() {
    setActiveTab("trending");
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=20&offset=${(page - 1) * 20}&rating=g`;
    fetchGifs(url, false);
  }

  // Load More Gifs
  function loadMore() {
    setPage((prevPage) => prevPage + 1);
    if (activeTab === "trending") {
      fetchTrending();
    } else {
      searchGifs(false);
    }
  }

  // Handle Enter Key for Search
  function handleKeyDown(event) {
    if (event.key === "Enter" || event.keyCode === 13) {
      searchGifs(true);
    }
  }

  return (
    <div>
      <h1 className="header-title">GIF SEARCH ENGINE</h1>
      <Navbar setActiveTab={setActiveTab} fetchTrending={fetchTrending} />
      <hr className="divider" />
      <SearchBar ref={ref} handleKeyDown={handleKeyDown} searchGifs={searchGifs} />
      <div className="search-info">
        With great power comes great responsibility of distributing GIFs!
      </div>
      <GifGrid gifs={gifs} />
      {gifs.length > 0 && <LoadMoreButton loadMore={loadMore} />}
    </div>
  );
}
