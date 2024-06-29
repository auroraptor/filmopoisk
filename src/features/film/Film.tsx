import { Link } from "react-router-dom";
import styles from "./Film.module.css";
import Raiting from "../rating/Rating";
import { ShortMovieInfo } from "../../shared/types";

function Film({ id, title, genre, release_year, description, poster }: ShortMovieInfo) {
  return (
    <article className={styles.filmCard}>
      <img src={poster} alt={title} className={styles.filmImage} />
      <div className={styles.filmDetailsContainer}>
        <div className={styles.filmDetails}>
          <Link key={id} to={`/film/${id}`} className={styles.filmLink}>
            <h3 className={styles.filmTitle}>{title}</h3>
          </Link>

          <table className={styles.filmInfo}>
            <tbody>
              <tr>
                <td className={styles.label}>Жанр:</td>
                <td className={styles.value}>{genre}</td>
              </tr>
              <tr>
                <td className={styles.label}>Год выпуска:</td>
                <td className={styles.value}>{release_year}</td>
              </tr>
              <tr>
                <td className={styles.label}>Описание:</td>
                <td className={styles.value}>{description}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Raiting id={id}/>
      </div>
    </article>
  );
}

export default Film;
