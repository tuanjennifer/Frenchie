import React from "react";
import "../public/styles.css";
import Card from "./card";

export default function App() {
  return (
    <div className="App">
      <h1>FRENCHIE GENERATOR</h1>
      <Card />
      <button
        type="button"
        className="btn btn-sm btn-dark"
        onClick={() => window.location.reload(false)}
      >
        Reload !
      </button>
      <p>Photos by Karsten Winegeart on Unsplash</p>
    </div>
  );
}
