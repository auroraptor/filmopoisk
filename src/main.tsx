import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import "normalize.css";
import "./shared/styles/global.css";
import FilmPage from "./pages/film/FilmPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/film/:id" element={<FilmPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
