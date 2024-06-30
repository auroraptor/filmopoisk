import { useState } from 'react';
import Filters from '@/components/filters/Filters';
import Films from '@/components/films/Films';
import styles from './index.module.css';

export default function Home() {
  const [filters, setFilters] = useState({ genre: '', year: '' });

  const handleFilterChange = (newFilters: { genre: string; year: string }) => {
    setFilters(newFilters);
  };

  return (
    <main className={styles.main}>
      <Filters onFilterChange={handleFilterChange} />
      <div className={styles.flex}>
        <Films filters={filters} />
        </div>
      
    </main>
  );
}
