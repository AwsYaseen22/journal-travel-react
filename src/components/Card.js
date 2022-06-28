import React from "react";
import "./Card.css";
import fuji from "../images/Rectangle 77.png";
import pointer from "../images/Fill 219.png";

export default function Card() {
  return (
    <div className="cad-container">
      <img src={fuji} className="card--image" />
      <div className="card--details">
        <div>
          <img src={pointer} className="card--pointer" />
          <span className="card--location">JAPAN</span>
          <span className="card--link">View on Goodle Maps</span>
        </div>
        <h1 className="card--main-title">Mount Fuji</h1>
        <span className="card--date">12 Jan, 2021 - 24 Jan, 2021</span>
        <p className="card--paragraph">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}
