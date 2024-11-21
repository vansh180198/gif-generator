import React from "react";

const LoadMoreButton = ({ loadMore }) => {
  return (
    <button onClick={loadMore} className="load-more-button">
      Load More
    </button>
  );
};

export default LoadMoreButton;
