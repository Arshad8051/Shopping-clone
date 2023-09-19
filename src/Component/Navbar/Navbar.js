import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <h1>Meesho</h1>
        </div>
      </div>
      <div className="navbar-center">
        <input type="text" className="search" placeholder="Search" />
      </div>
      <div className="navbar-right">
        <div className="navbar-link">
          <a href="/download-app">Download    App</a>
          

        </div>
        <div className="navbar-link">
          <a href="/supplier">Supplier</a>
        </div>
        <div className="navbar-link">
          <a href="/cart">Cart</a>
        </div>
        <div className="navbar-link">
          <a href="/profile">Profile</a>
        </div>
      </div>
    </div>
  );
}
