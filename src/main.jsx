import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import GifExpertApp from "./GifExpertApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);

// const apiKey = 'LC37lBhTeiUHFQ7L9ZwjQtnaHlDhPuzD';
// const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
