import React from "react";

const GifGrid = ({ gifs }) => {
  return (
    <div className="gif-grid">
      {gifs.map((gif) => (
        <img
          key={gif.id}
          src={gif.images.preview_gif.url}
          alt={gif.title || "GIF"}
          className="gif-grid__image"
        />
      ))}
    </div>
  );
};

export default GifGrid;
