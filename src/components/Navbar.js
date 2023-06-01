import React from "react";
import "../App.css";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <div className="container">
      <div className="item">
        <h1>CANDORBEES</h1>
      </div>
      <div className="item">
        <ul className="list">
          <li className="listItem">Home</li>
          <li className="listItem">WishList</li>
          <li className="listItem">Moi Application</li>

          <li className="listItem">Santa Game</li>
          <li className="listItem">Contact</li>
        </ul>
      </div>
      <div className="item">
        <Button className="login-btn">Login</Button>
        <Button className="signup-btn">Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;
