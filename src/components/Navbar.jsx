import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const navStyle = {
    backgroundColor: "#141414",
    padding: "1rem 6rem",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const logoStyle = {
    height: "3rem",
    objectFit: "contain",
  };

  const ulStyle = {
    listStyle: "none",
    display: "flex",
    gap: "2.5rem",
    margin: 0,
    padding: 0,
    fontSize: "1rem",
  };

  const liStyle = {
    cursor: "pointer",
  };

  const buttonGroupStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
  };

  const buttonStyle = {
    background: "transparent",
    border: "none",
    color: "white",
    cursor: "pointer",
  };

  return (
    <nav style={navStyle}>
      <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        <img src={logo} alt="Netflix Logo" style={logoStyle} />
      </div>
      <ul style={ulStyle}>
        <li style={liStyle}>Home</li>
        <li style={liStyle}>TV Shows</li>
        <li style={liStyle}>Movies</li>
        <li style={liStyle}>Recently Added</li>
        <li style={liStyle}>My List</li>
      </ul>
      <div style={buttonGroupStyle}>
        <button style={buttonStyle}>Kids</button>
        <button style={buttonStyle}>
          <i className="bi bi-bell"></i>
        </button>
        <button style={buttonStyle} onClick={() => navigate("/profile")}>
          <i className="bi bi-person"></i>
        </button>
        <button style={buttonStyle} onClick={() => navigate("/settings")}>
          <i className="bi bi-gear"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
