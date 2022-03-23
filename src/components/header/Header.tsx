import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <div className="links">
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="dvds">
          DVDs
        </Link>
      </div>
    </nav>
  );
};

export default Header;
