import React from "react";
import "../App.css";

export default function Home() {
 

  return (
    <div className="home-container">
      <div className="home-text-section">
        <h1 className="primary-heading">Gifting made Easy</h1>
        <p className="primary-text">
          GiftList is the easiest way to exchange gifts with friends and family
          for birthdays, holidays, and more!
        </p>
        <button className="secondary-button">Create a WishList</button>
      </div>
    </div>
  );
}
