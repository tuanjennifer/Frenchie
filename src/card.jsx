import React from "react";
import Source from "./image";

function card() {
  let randomNum = Math.floor(Math.random() * 6);

  return (
    <div className="card">
      <img
        className="card-img-top cardimg"
        src={Source[randomNum].source}
        alt="a"
      />
      <h3 className="cardTitle">{Source[randomNum].name}</h3>
    </div>
  );
}

export default card;
