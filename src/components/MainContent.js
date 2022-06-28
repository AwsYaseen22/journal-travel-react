import React from "react";
import "./MainContent.css";
import Card from "./Card";
import data from "../data";

export default function MainContent() {
  let cards = data.map((c, i) => {
    return <Card details={c} key={i} />;
  });
  return <section className="journal-list">{cards}</section>;
}
