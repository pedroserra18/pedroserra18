import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>Museus Historicos</h2>
      </div>
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#home">Início</a>
        </li>
        <li
          className="dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <a href="#museums" className="dropdown-toggle">
            Museus
          </a>
          <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
            <li>
              <a href="#museum-1">Louvre</a> {/* Link para a seção Louvre */}
            </li>
            <li>
              <a href="#museum-2">British Museum</a>{" "}
              {/* Link para a seção British Museum */}
            </li>
            <li>
              <a href="#museum-3">Metropolitan Museu</a>{" "}
              {/* Link para a seção Metropolitan Museum */}
            </li>
            <li>
              <a href="#museum-4">Museu del Prado</a>{" "}
              {/* Link para a seção Museo del Prado */}
            </li>
            <li>
              <a href="#museum-5">Vatican Museu</a>{" "}
              {/* Link para a seção Vatican Museums */}
            </li>
            <li>
              <a href="#museum-6">Rijksmuseum</a>{" "}
              {/* Link para a seção Rijksmuseum */}
            </li>
          </ul>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
    </nav>
  );
};

export default Navbar;
