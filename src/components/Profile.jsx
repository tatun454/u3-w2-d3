import React, { useState } from "react";

const Profile = () => {
  const [profileName, setProfileName] = useState("Strive Student");
  const [language, setLanguage] = useState("English");
  const [maturityRating, setMaturityRating] = useState("ALL MATURITY RATINGS");
  const [autoplayNext, setAutoplayNext] = useState(true);
  const [autoplayPreview, setAutoplayPreview] = useState(true);

  const containerStyle = {
    maxWidth: "600px",
    margin: "2rem auto",
    color: "white",
    fontFamily: "Arial, sans-serif",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    borderBottom: "1px solid #444",
    paddingBottom: "0.5rem",
    marginBottom: "1rem",
  };
  const rowStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    cursor: "pointer",
  };

  const labelStyle = {
    width: "120px",
    fontWeight: "bold",
  };

  const inputStyle = {
    flex: 1,
    padding: "0.5rem",
    fontSize: "1rem",
    borderRadius: "3px",
    border: "none",
  };

  const buttonStyle = {
    backgroundColor: "#e50914",
    border: "none",
    color: "white",
    padding: "0.5rem 1.5rem",
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "3px",
    marginRight: "1rem",
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#333",
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#555",
  };

  const maturityButtonStyle = {
    backgroundColor: "#333",
    border: "none",
    color: "white",
    padding: "0.4rem 1rem",
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "3px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Edit Profile</h1>

      <div style={rowStyle}>
        <i
          class="bi bi-person-fill-gear"
          alt="Profile"
          style={{ marginRight: "1rem" }}
        ></i>
        <input
          type="text"
          value={profileName}
          onChange={(e) => setProfileName(e.target.value)}
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label style={{ fontWeight: "bold" }}>Language:</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{ marginLeft: "1rem", padding: "0.4rem", borderRadius: "3px" }}
        >
          <option>English</option>
          <option>Italian</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
        </select>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label style={{ fontWeight: "bold" }}>Maturity Settings:</label>
        <button style={maturityButtonStyle}>{maturityRating}</button>
        <p style={{ fontSize: "0.9rem", color: "#aaa", marginTop: "0.3rem" }}>
          Show titles of <strong>all maturity ratings</strong> for this profile.
        </p>
        <button style={{ ...buttonStyle, marginTop: "0.5rem" }}>Edit</button>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label style={{ fontWeight: "bold" }}>Autoplay controls</label>
        <div>
          <label>
            <input
              type="checkbox"
              checked={autoplayNext}
              onChange={() => setAutoplayNext(!autoplayNext)}
            />{" "}
            Autoplay next episode in a series on all devices.
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={autoplayPreview}
              onChange={() => setAutoplayPreview(!autoplayPreview)}
            />{" "}
            Autoplay previews while browsing on all devices.
          </label>
        </div>
      </div>

      <div>
        <button style={buttonStyle}>Save</button>
        <button style={secondaryButtonStyle}>Cancel</button>
        <button style={deleteButtonStyle}>Delete Profile</button>
      </div>
    </div>
  );
};

export default Profile;
