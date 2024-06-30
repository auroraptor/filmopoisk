import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './Main.module.css';
import Content from './content/Content';
import Filters from './filters/Filters';
import Films from './films/Films';
import Header from './header/Header';

function Main() {
  const router = useRouter();
  const [filters, setFilters] = useState({
    genre: (router.query.genre as string) || '',
    year: (router.query.year as string) || '',
  });

  const handleFilterChange = (newFilters: { genre: string; year: string }) => {
    setFilters(newFilters);
    router.push({
      pathname: '/',
      query: newFilters,
    });
  };

  useEffect(() => {
    setFilters({
      genre: (router.query.genre as string) || '',
      year: (router.query.year as string) || '',
    });
  }, [router.query]);

  return (
    <div className={styles.layout}>
    <Header />
    <main className={styles.main}>
      <Filters onFilterChange={handleFilterChange} />
      <Content>
        <Films filters={filters} />
      </Content>
    </main>
  </div>
    
  );
}

export default Main;
