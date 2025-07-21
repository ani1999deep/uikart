import React from "react";
import "../css/MobileMenu.css";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
      <button
        onClick={() => setMenuOpen(false)}
        className="close-btn"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <nav className="menu-links">
        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </nav>
    </div>
  );
};
