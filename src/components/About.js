import React from "react";
import "../App.css";

export default function About() {
  const phImagePath = "/img/home-banner-background.png";
  return (
    <div className="about-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#84bec9"
          //   fill-opacity="0"
          d="M0,256L1440,128L1440,0L0,0Z"
        ></path>
      </svg>
      <div>
        <image src={phImagePath} />
      </div>
    </div>
  );
}
