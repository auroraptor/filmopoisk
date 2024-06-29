import { FullMovieInfo } from "../../shared/types";
import Rating from "../../features/rating/Rating";
import styles from "./FilmDetails.module.css";

interface FilmDetailsProps {
  film: FullMovieInfo;
}

const FilmDetails: React.FC<FilmDetailsProps> = ({ film }) => {
  return (
    <article className={styles.filmDetailsContainer}>
      <div className={styles.filmDetails}>
        <img src={film.poster} alt={film.title} className={styles.filmPoster} />
        <div className={styles.details}>
          <h1 className={styles.title}>{film.title}</h1>
          <table className={styles.filmInfo}>
            <tbody>
              <tr>
                <td className={styles.label}>Жанр:</td>
                <td className={styles.value}>{film.genre}</td>
              </tr>
              <tr>
                <td className={styles.label}>Год выпуска:</td>
                <td className={styles.value}>{film.release_year}</td>
              </tr>
              <tr>
                <td className={styles.label}>Рейтинг:</td>
                <td className={styles.value}>{film.rating}</td>
              </tr>
              <tr>
                <td className={styles.label}>Описание:</td>
                <td className={styles.value}>{film.description}</td>
              </tr>
            </tbody>
          </table>
          <Rating id={film.id} />
        </div>
      </div>
    </article>
  );
};

export default FilmDetails;
