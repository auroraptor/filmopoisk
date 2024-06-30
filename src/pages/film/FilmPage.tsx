import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../entities/header/Header";
import { fetchFilmById } from "../../shared/utils/fetchFilmById";
import { FullMovieInfo } from "../../shared/types";
import FilmDetails from "../../widgets/filmDetails/FilmDetails";
import ActorsSlider from "../../widgets/actorsSlider/ActorsSlider";
import styles from "./FilmPage.module.css";

function FilmPage() {
  const { id } = useParams();
  const [film, setFilm] = useState<FullMovieInfo | null>(null);

  useEffect(() => {
    if (!id) return;
    fetchFilmById(id).then((data) => setFilm(data));
  }, [id]);

  if (!film) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.filmPage}>
      <FilmDetails film={film} />
      <ActorsSlider actors={film.actors} />
    </div>
  );
}

export default FilmPage;
