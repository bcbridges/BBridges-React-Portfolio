import React from "react";
import "./navtabs.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          id="navBtn"
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
          id="navBtn"
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href={process.env.PUBLIC_URL + "/resume.pdf"}
          target="_blank"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
          id="navBtn"
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
          id="navBtn"
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
