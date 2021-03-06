import React from "react";
import stephen2 from "../assets/images/stephen2.jpeg";
import Info from "../assets/JS/Info";

import "../css/Home.css";
import Header from "../components/Header";

function Home() {
  return (
    <div className="about-container">
      <Header heading="Stephen Sarfo" subheading="Learn more about me" />

      <img src={stephen2} alt="profile" className="profile-img" />

      <div className="about-info">
        <h1>About Me</h1>
        <p>{Info.home.about1}</p>
        <p>{Info.home.about2}</p>
      </div>
    </div>
  );
}

export default Home;
