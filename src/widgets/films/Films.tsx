import Film from "../../features/film/Film";
import styles from "./Films.module.css";

const films = [
  {
    id: "1",
    title: "Властелин колец: Братство кольца",
    genre: "Фэнтези",
    year: "2001",
    description:
      "Сказания о Средиземье — это хроника Великой войны за Кольцо...",
    imageUrl: "#",
  },
  {
    id: "11",
    title: "Властелин колец: Две крепости",
    genre: "Фэнтези",
    year: "2002",
    description:
      "Повелитель сил тьмы Саурон направляет свою бесчисленную армию под стены Минас-Тирита, крепости Последней Надежды. Он предвкушает близкую победу, но именно это мешает ему заметить две крохотные фигурки — хоббитов, приближающихся к Роковой Горе, где им предстоит уничтожить Кольцо Всевластья.",
    imageUrl: "#",
  },
];

function Films() {
  return (
    <div className={styles.films}>
      {films.map(({ id, title, genre, year, description, imageUrl }, index) => (
        <Film
          key={index}
          id={id}
          title={title}
          genre={genre}
          year={year}
          description={description}
          imageUrl={imageUrl}
        />
      ))}
    </div>
  );
}

export default Films;
