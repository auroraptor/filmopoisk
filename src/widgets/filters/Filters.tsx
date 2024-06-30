import { useState, useEffect } from 'react';
import Filter from '../../features/filter/Filter';
import { GENRES, GenreOptions } from '../../shared/constants/genres';
import { YEARS, YearOptions } from '../../shared/constants/years';
import styles from './Filters.module.css';

type FiltersProps = {
  onFilterChange: (filters: { genre: string; year: string }) => void;
};

function Filters({ onFilterChange }: FiltersProps) {
  const genreOptions: GenreOptions[] = [...Object.values(GENRES)];
  const yearOptions: YearOptions[] = [...Object.values(YEARS)];

  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    onFilterChange({ genre, year });
  }, [genre, year, onFilterChange]);

  return (
    <aside className={styles.filtersContainer}>
      <div className={styles.filters}>
        <h3 className={styles.title}>Фильтр</h3>
        <Filter label="Жанр" options={genreOptions} value={genre} onChange={setGenre} />
        <Filter label="Год выпуска" options={yearOptions} value={year} onChange={setYear} />
      </div>
    </aside>
  );
}

export default Filters;
