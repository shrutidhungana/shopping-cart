import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'

const Nav = () => {
  return (
    <div>
      <ul className = "Nav-wrapper">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
