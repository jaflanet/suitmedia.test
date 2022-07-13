import React, { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navLeft">
        <a href="/"><b>Company</b></a>
        </div>
        <div className="navRight">
          <div className="dropdown">
            <button className="dropbtn">
              ABOUT
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="/">HISTORY</a>
              <a href="/">VISION MISSION</a>
            </div>
          </div>
          <a href="/">OUR WORK</a>
          <a href="/">OUR TEAM</a>
          <a href="/">CONTACT</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
