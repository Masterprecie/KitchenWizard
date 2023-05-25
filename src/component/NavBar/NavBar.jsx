import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import UserImage from "../../assets/user.jpg";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Kitchen<font className="logo">Wizzard</font>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/SignIn"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sign in
              </Link>
            </li>
          </ul>
          <img className="user" src={UserImage} alt="user" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
