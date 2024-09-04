import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; // Create this file if you want to add global styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
