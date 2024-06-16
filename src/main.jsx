import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*HelmetProvider is a context provider that allows you to manage your head tags with React Helmet. (like the title, meta tags, and other elements)*/}
    <HelmetProvider>
      {/*CssBaseline helps to reset CSS across browsers to ensure consistent styling.*/}
      <CssBaseline />

      <div onClick={(e) => e.preventDefault()}>
        <App />
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
