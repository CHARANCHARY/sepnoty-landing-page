import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./index.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNavbar = () => {
    setIsNavOpen(false);
  };

  return (
    <header>
      <img className="logoimage" src={logo} alt="not found" />
      <button className="nav-btn" onClick={toggleNavbar}>
        {isNavOpen ? <FaTimes /> : <FaBars onClick={closeNavbar} />}
      </button>
      <nav className={isNavOpen ? "responsive_nav" : ""}>
        <a href="/#" onClick={closeNavbar}>
          Home
        </a>

        {/* Services Dropdown */}
        <div className="dropdown">
          <div className="nav-item" onClick={toggleDropdown}>
            <span>Services</span>
            <FaChevronDown className="arrow-icon" />
          </div>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <a href="/#">Option 1</a>
              <a href="/#">Option 2</a>
              <a href="/#">Option 3</a>
            </div>
          )}
        </div>

        {/* Products Dropdown */}
        <div className="dropdown">
          <div className="nav-item" onClick={toggleDropdown}>
            <span>Products</span>
            <FaChevronDown className="arrow-icon" />
          </div>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <a href="/#">Option 1</a>
              <a href="/#">Option 2</a>
              <a href="/#">Option 3</a>
            </div>
          )}
        </div>

        <a href="/#" onClick={closeNavbar}>
          Blog
        </a>
        <a href="/#" onClick={closeNavbar}>
          Contact
        </a>
        <a href="/#" onClick={closeNavbar}>
          About
        </a>
        <button className="contact-button" onClick={closeNavbar}>
          Contact Us
        </button>
      </nav>
    </header>
  );
};

export default Header;
