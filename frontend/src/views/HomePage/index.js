import React from "react";
import Logo from "../../assets/images/Logomarca_CLIO.jpg";

import "./styles.css";

function HomePage() {
  return (
    <div className="home-page-container">
      <div
        className="header-user"
        style={{
          display: "flex",
          flexDirection: "row",
          margin: 10,
          alignItems: "center",
        }}
      >
        <img src={Logo} alt="CLIO" height={100} />
        <div>
          <h1>Ian Marcony</h1>
          <h2>imarconyls@gmail.com</h2>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
