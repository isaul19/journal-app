import React from "react";
import ReactDOM from "react-dom/client";
import { JournalApp } from "./JournalApp.jsx";
import "./assets/styles/main.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <JournalApp />
  </BrowserRouter>
  // </React.StrictMode>
);
