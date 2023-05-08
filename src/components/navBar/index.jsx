import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import AuthContextProvider from "../../context/AuthContextProvider";
import LoginPage from "../../page/Login";
import Home from "../../page/home";
import ProtectRoute from "../protectRouter";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const NavBar = () => {
  // Done TODO step 8 : cerate  Link for pages

  return (
    <div className="nav-bar">
      <div>
        <h2>GSG Shop</h2>
      </div>
      <div className="nav-items">
        <span>
          <Link to="/"> Home </Link>
        </span>
        <span>
          <Link to="/about"> About </Link>
        </span>
        <span>
          <Link to="/Profile">Profile</Link>
        </span>

        <span>
          <Link to="/login"> Login </Link>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
