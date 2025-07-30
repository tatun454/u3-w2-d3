import React from "react";

const Settings = () => {
  const containerStyle = {
    maxWidth: "900px",
    margin: "2rem auto",
    color: "white",
    fontFamily: "Arial, sans-serif",
  };

  const sectionTitleStyle = {
    fontWeight: "bold",
    fontSize: "0.9rem",
    color: "#888",
    marginTop: "2rem",
    marginBottom: "0.5rem",
    borderBottom: "1px solid #444",
    paddingBottom: "0.3rem",
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "0.5rem 0",
    borderBottom: "1px solid #333",
    alignItems: "center",
  };

  const leftTextStyle = {
    fontSize: "0.9rem",
  };

  const rightLinkStyle = {
    fontSize: "0.9rem",
    color: "#0071eb",
    cursor: "pointer",
    textDecoration: "none",
  };

  const buttonStyle = {
    backgroundColor: "#e50914",
    border: "none",
    color: "white",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "3px",
  };

  return (
    <div style={containerStyle}>
      <h1>Account</h1>

      <div style={sectionTitleStyle}>MEMBERSHIP & BILLING</div>
      <div style={rowStyle}>
        <button style={buttonStyle}>Cancel Membership</button>
        <div>
          <div style={{ fontWeight: "bold" }}>student@strive.school</div>
          <div>Password: ********</div>
          <div>Phone: 321 044 1279</div>
        </div>
        <div>
          <a href="#" style={rightLinkStyle}>
            Change account email
          </a>
          <br />
          <a href="#" style={rightLinkStyle}>
            Change password
          </a>
          <br />
          <a href="#" style={rightLinkStyle}>
            Change phone number
          </a>
        </div>
      </div>

      <div style={rowStyle}>
        <div>
          <span style={{ fontWeight: "bold" }}>
            <i className="bi bi-paypal"></i> admin@strive.school
          </span>
        </div>
        <div>
          <a href="#" style={rightLinkStyle}>
            Update payment info
          </a>
          <br />
          <a href="#" style={rightLinkStyle}>
            Billing details
          </a>
        </div>
      </div>

      <div style={rowStyle}>
        <div></div>
        <div>
          <a href="#" style={rightLinkStyle}>
            Redeem gift card or promo code
          </a>
          <br />
          <a href="#" style={rightLinkStyle}>
            Where to buy gift cards
          </a>
        </div>
      </div>

      <div style={sectionTitleStyle}>PLAN DETAILS</div>
      <div style={rowStyle}>
        <div>
          <strong>Premium</strong>{" "}
          <span
            style={{
              border: "1px solid #ccc",
              padding: "0 4px",
              fontSize: "0.8rem",
              marginLeft: "0.5rem",
            }}
          >
            ULTRA HD
          </span>
        </div>
        <div>
          <a href="#" style={rightLinkStyle}>
            Change plan
          </a>
        </div>
      </div>

      <div style={sectionTitleStyle}>SETTINGS</div>
      <div
        style={{
          ...rowStyle,
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <a href="#" style={rightLinkStyle}>
          Parental controls
        </a>
        <a href="#" style={rightLinkStyle}>
          Test participation
        </a>
        <a href="#" style={rightLinkStyle}>
          Manage download devices
        </a>
        <a href="#" style={rightLinkStyle}>
          Activate a device
        </a>
        <a href="#" style={rightLinkStyle}>
          Recent device streaming activity
        </a>
        <a href="#" style={rightLinkStyle}>
          Sign out of all devices
        </a>
      </div>

      <div style={sectionTitleStyle}>MY PROFILE</div>
      <div
        style={{
          ...rowStyle,
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <i class="bi bi-person-fill"></i>

          <strong>Strive Student</strong>
        </div>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="#" style={rightLinkStyle}>
            Language
          </a>
          <a href="#" style={rightLinkStyle}>
            Playback settings
          </a>
          <a href="#" style={rightLinkStyle}>
            Subtitle appearance
          </a>
          <a href="#" style={rightLinkStyle}>
            Viewing activity
          </a>
          <a href="#" style={rightLinkStyle}>
            Ratings
          </a>
          <a href="#" style={rightLinkStyle}>
            Manage profiles
          </a>
          <a href="#" style={rightLinkStyle}>
            Add profile email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Settings;
