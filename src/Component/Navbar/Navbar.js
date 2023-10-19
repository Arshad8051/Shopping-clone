import React , { useState }from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';
export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
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
          <a href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow">Download    App</a>
          

        </div>
        <div className="navbar-link">
        {/* <Link to={"/signup"} className="btn"  >SignUp</Link> */}
        <a href="/signup">SignUp</a>
        </div>
        <div className="navbar-link">
          <a href="/cart">Cart</a>
        </div>
        <div className="navbar-link"onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <a href="/profile">Profile</a>
          {isDropdownOpen && (
          <div className="dropdown-content">
            {/* <Link to="/">My Profile</Link> */}
            <Link to="/login">login</Link>
            <Link to="/">Logout</Link>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
