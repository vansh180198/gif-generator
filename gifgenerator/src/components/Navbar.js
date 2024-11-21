import React from "react";

const Navbar = ({ setActiveTab, fetchTrending }) => {
  return (
    <nav className="navbar">
      <div onClick={() => setActiveTab("home")} className="navbar__tab">
        Home
      </div>
      <div onClick={fetchTrending} className="navbar__tab">
        Trending
      </div>
    </nav>
  );
};

export default Navbar;
