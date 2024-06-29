import Film from "../../features/film/Film";
import { Link } from "react-router-dom";
import styles from "./Films.module.css";

const films = [
  {
    id: "1",
    title: "Властелин колец: Братство кольца",
    genre: "Фэнтези",
    year: "2001",
    description:
      "Сказания о Средиземье — это хроника Великой войны за Кольцо...",
    imageUrl: "https://path-to-image.com/image1.jpg",
  },
  {
    id: "11",
    title: "Властелин колец: Две крепости",
    genre: "Фэнтези",
    year: "2002",
    description: "Продолжение приключений Фродо и его друзей...",
    imageUrl: "https://path-to-image.com/image2.jpg",
  },
];

function Films() {
  return (
    <div className={styles.films}>
      {films.map((film, index) => (
        <Link key={film.id} to={`/film/${film.id}`} className={styles.filmLink}>
          <Film
            key={index}
            title={film.title}
            genre={film.genre}
            year={film.year}
            description={film.description}
            imageUrl={film.imageUrl}
          />
        </Link>
      ))}
    </div>
  );
}

export default Films;
