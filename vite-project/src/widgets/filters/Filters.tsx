import Filter from "../../features/filter/Filter";
import styles from "./Filters.module.css";

function Filters() {
  const genreOptions = [
    "Выберите жанр",
    "Фантастика",
    "Драма",
    "Комедия",
    "Ужасы",
  ];
  const yearOptions = ["Выберите год", "2023", "2022", "2021", "2020"];

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filters}>
        <h2 className={styles.title}>Фильтр</h2>
        <Filter label="Жанр" options={genreOptions} />
        <Filter label="Год выпуска" options={yearOptions} />
      </div>
    </div>
  );
}

export default Filters;
