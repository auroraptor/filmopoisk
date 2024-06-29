// src/components/films/Films.tsx

import { useFetchFilmsQuery } from '../../store/services/films';
import { ShortMovieInfo } from '../../shared/types';
import styles from './Films.module.css';
import Film from '../../features/film/Film';

const Films: React.FC = () => {
  const { data, error, isLoading } = useFetchFilmsQuery({}) as ReturnType<typeof useFetchFilmsQuery>;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading films</div>;
  }

  return (
    <div className={styles.films}>
      {data?.search_result.map((film: ShortMovieInfo) => (
        <Film key={film.id} {...film} />
      ))}
    </div>
  );
};

export default Films;
