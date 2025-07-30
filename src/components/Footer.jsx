import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#141414",
    color: "gray",
    padding: "3rem 6rem",
    fontSize: "0.9rem",
    display: "flex",
    flexDirection: "column",
    gap: "2.5rem",
  };

  const topDivStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "2.5rem",
  };

  const columnStyle = {
    flex: "1 1 150px",
  };

  const socialDivStyle = {
    display: "flex",
    gap: "1.5rem",
    fontSize: "1.8rem",
    color: "gray",
  };

  const copyrightStyle = {
    fontSize: "0.8rem",
    color: "gray",
  };

  return (
    <footer style={footerStyle}>
      <div style={topDivStyle}>
        <div style={columnStyle}>
          <p>Audio and Subtitles</p>
          <p>Media Center</p>
          <p>Privacy</p>
          <p>Contact Us</p>
        </div>
        <div style={columnStyle}>
          <p>Audio Description</p>
          <p>Investor Relations</p>
          <p>Legal Notices</p>
        </div>
        <div style={columnStyle}>
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
        </div>
        <div style={columnStyle}>
          <p>Gift Cards</p>
          <p>Terms of Use</p>
          <p>Corporate Information</p>
        </div>
      </div>
      <div style={socialDivStyle}>
        <a href="#" aria-label="Facebook" style={{ color: "gray" }}>
          <i className="bi bi-facebook"></i>
        </a>
        <a href="#" aria-label="Instagram" style={{ color: "gray" }}>
          <i className="bi bi-instagram"></i>
        </a>
        <a href="#" aria-label="Twitter" style={{ color: "gray" }}>
          <i className="bi bi-twitter-x"></i>
        </a>
        <a href="#" aria-label="YouTube" style={{ color: "gray" }}>
          <i className="bi bi-youtube"></i>
        </a>
      </div>
      <div style={copyrightStyle}>&copy; 1997-2024 Netflix, Inc.</div>
    </footer>
  );
};

export default Footer;
