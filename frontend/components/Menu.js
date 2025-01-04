import React from "react";
import ReactDOM, { createRoot } from 'react-dom/client';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import "./componentcss/menu.css";
import logo from "./images/logo.png";
export default Menu = () => {
  return (
    <nav className="navbar justify-content-around">
       <div className="navbar-logo">
        <img src={logo} alt="JobPortal Logo" className="navbar-logo-img" />
        <span>Hirehub</span>
      </div>
      <div className="navbar-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/jobs">Jobs</a></li>
          <li><a href="/employers">Employers</a></li>
          <li><a href="/candidates">Candidates</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="authorize-btn">
      <ul>
          <li><a href="/" className="">Register</a></li>
          <li><a href="/">Login</a></li>
      </ul>
      </div>
    </nav>
  );
};