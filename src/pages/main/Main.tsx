import { useCallback, useState } from 'react';
import Filters from '../../widgets/filters/Filters';
import Films from '../../widgets/films/Films';
import styles from './Main.module.css';
import Content from '../../shared/components/content/Content';

function Main() {
  const [filters, setFilters] = useState({ genre: '', year: '' });

  const handleFilterChange = useCallback((newFilters: { genre: string; year: string }) => {
    setFilters(newFilters);
  }, []);

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
