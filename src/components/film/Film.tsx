import Link from 'next/link';
import styles from './Film.module.css';
import { ShortMovieInfo } from '../../shared/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Rating from '../rating/Rating';

function Film({ id, title, genre, release_year, description, poster }: ShortMovieInfo) {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  
  return (
    <article className={styles.filmCard}>
      <img src={poster} alt={title} className={styles.filmImage} />
      <div className={styles.filmDetailsContainer}>
        <div className={styles.filmDetails}>
          <Link href={`/film/${id}`} passHref className={styles.filmLink}>
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
        {isAuth && <Rating id={id} />}
      </div>
    </article>
  );
}

export default Film;
