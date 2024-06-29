import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../entities/header/Header";
import styles from "./FilmPage.module.css";

function FilmPage() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    // Здесь можно сделать запрос к API для получения данных о фильме по ID
    // fetchFilmById(id).then(data => setFilm(data));
  }, [id]);

  if (!film) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className={styles.filmPage}>
        <div className={styles.filmDetails}>
          {/* Отображение данных фильма */}
          <h1>{film.title}</h1>
          <img src={film.poster} alt={film.title} />
          <p>{film.description}</p>
          {/* Другие данные */}
        </div>
        <div className={styles.actorsSlider}>
          {/* Слайдер с актерами */}
          <h2>Актёры</h2>
          <div className={styles.actors}>
            {film.actors.map(actor => (
              <div key={actor.id} className={styles.actor}>
                <img src={actor.photo} alt={actor.name} />
                <p>{actor.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FilmPage;
