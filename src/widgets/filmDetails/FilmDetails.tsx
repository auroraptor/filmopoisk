import { FullMovieInfo } from "../../shared/types";
import Rating from "../../shared/components/rating/Rating";
import styles from "./FilmDetails.module.css";

interface FilmDetailsProps {
  film: FullMovieInfo;
}

const FilmDetails: React.FC<FilmDetailsProps> = ({ film }) => {
  return (
    <section className={styles.filmDetailsContainer}>
      <div className={styles.filmDetails}>
        <img src={film.poster} alt={film.title} className={styles.filmPoster} />
        <div className={styles.details}>
          <h1 className={styles.title}>{film.title}</h1>
          <div className={styles.filmInfo}>
            <p className={styles.value}>
              <span className={styles.label}>Жанр:</span>
              {film.genre}
            </p>
            <p className={styles.value}>
              <span className={styles.label}>Год выпуска:</span>
              {film.release_year}
            </p>
            <p className={styles.value}>
              <span className={styles.label}>Рейтинг:</span>
              {film.rating}
            </p>
            <div className={styles.description}>
              <p className={styles.label}>Описание</p>
              <p className={styles.value}>{film.description}</p>
            </div>
          </div>
          <Rating id={film.id} className={styles.filmRating} />
        </div>
      </div>
    </section>
  );
};

export default FilmDetails;
