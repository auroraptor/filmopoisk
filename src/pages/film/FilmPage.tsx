import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../entities/header/Header";
import styles from "./FilmPage.module.css";
import { fetchFilmById } from "../../shared/utils/fetchFilmById";
import Film from "../../features/film/Film";

function FilmPage() {
  const { id } = useParams();
  const [film, setFilm] = useState<typeof Film | null>(null);

  useEffect(() => {
    if (!id) return;
    fetchFilmById(id).then((data) => setFilm(data));
  }, [id]);

  if (!film) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className={styles.filmPage}>
        <div className={styles.filmDetails}>
          <h1>{film.title}</h1>
          <img src={film.imageUrl} alt={film.title} />
          <p>{film.description}</p>
        </div>
        <div className={styles.actorsSlider}>
          <h2>Актёры</h2>
          <div className={styles.actors}>
            {film.actors.map((actor) => (
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
