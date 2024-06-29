import { Link } from "react-router-dom";
import styles from "./Film.module.css";
import Raiting from "../raiting/Rating";

type FilmProps = {
  id: number | string;
  title: string;
  genre: string;
  year: string;
  description: string;
  imageUrl: string;
};

function Film({ id, title, genre, year, description, imageUrl }: FilmProps) {
  return (
    <article className={styles.filmCard}>
      <img src={imageUrl} alt={title} className={styles.filmImage} />
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
                <td className={styles.value}>{year}</td>
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
