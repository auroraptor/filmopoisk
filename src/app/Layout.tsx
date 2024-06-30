import { Routes, Route } from "react-router-dom";
import Header from "../entities/header/Header";
import FilmPage from "../pages/film/FilmPage";
import Main from "../pages/main/Main";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/film/:id" element={<FilmPage />} />
      </Routes>
    </div>
  );
}

export default Layout;
