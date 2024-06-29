import styles from './Film.module.css';

type FilmProps = {
  title: string;
  genre: string;
  year: string;
  description: string;
  imageUrl: string;
};

function Film({ title, genre, year, description, imageUrl }: FilmProps) {
  return (
    <div className={styles.filmCard}>
      <img src={imageUrl} alt={title} className={styles.filmImage} />
      <div className={styles.filmDetails}>
        <h3 className={styles.filmTitle}>{title}</h3>
        <p><strong>Жанр:</strong> {genre}</p>
        <p><strong>Год выпуска:</strong> {year}</p>
        <p><strong>Описание:</strong> {description}</p>
      </div>
      <div className={styles.filmRating}>
        <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
        <div>1 2 3 4 5</div>
      </div>
    </div>
  );
}

export default Film;
