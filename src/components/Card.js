import React from "react";
import "./Card.css";
// import fuji from "../images/fuji.png";
import pointer from "../images/Fill 219.png";

export default function Card(props) {
  let details = props.details;
  return (
    <div className="cad-container">
      <img src={details.imageUrl} className="card--image" />
      <div className="card--details">
        <div>
          <img src={pointer} className="card--pointer" />
          <span className="card--location">{details.location}</span>
          <a
            className="card--link"
            href={details.googleMapsUrl}
            target="_blank"
          >
            View on Goodle Maps
          </a>
        </div>
        <h1 className="card--main-title">{details.title}</h1>
        <span className="card--date">
          {details.startDate} - {details.endDate}
        </span>
        <p className="card--paragraph">{details.description}</p>
      </div>
    </div>
  );
}
