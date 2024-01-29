import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import SearchState from "./context/context-1/recipieContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <SearchState>
        <App />
      </SearchState>
    </BrowserRouter>
  </React.StrictMode>
);
