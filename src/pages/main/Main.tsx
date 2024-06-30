import { useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Filters from '../../widgets/filters/Filters';
import Films from '../../widgets/films/Films';
import styles from './Main.module.css';
import Content from '../../shared/components/content/Content';

function Main() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    genre: searchParams.get('genre') || '',
    year: searchParams.get('year') || '',
  });

  const handleFilterChange = useCallback((newFilters: { genre: string; year: string }) => {
    setFilters(newFilters);
    setSearchParams(newFilters);
  }, [setSearchParams]);

  return (
    <main className={styles.main}>
      <Filters onFilterChange={handleFilterChange} />
      <Content>
        <Films filters={filters} />
      </Content>
    </main>
  );
}

export default Main;
