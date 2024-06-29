import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import "normalize.css";
import "./shared/styles/global.css";
import FilmPage from "./pages/film/FilmPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/film/:id" element={<FilmPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
