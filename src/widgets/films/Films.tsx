import { useEffect, useState } from 'react';
import { useFetchFilmsQuery } from '../../store/services/films';
import Film from '../../features/film/Film';
import Pagination from '../../features/pagination/Pagination';
import SearchInput from '../../features/searchInput/SearchInput';
import styles from './Films.module.css';

function Films() {
  const [page, setPage] = useState(1);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchParams, setSearchParams] = useState<Record<string, string>>({});

  const { data, isLoading, isError } = useFetchFilmsQuery(searchParams);

  useEffect(() => {
    const params: Record<string, string> = { page: String(page) };
    if (searchTitle) {
      params.title = searchTitle;
    }
    setSearchParams(params);
  }, [page, searchTitle]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading films</div>;

  const handleSearchChange = (value: string) => {
    setSearchTitle(value);
    setPage(1);
  };

  return (
    <>
      <SearchInput
        placeholder="Название фильма"
        value={searchTitle}
        onChange={handleSearchChange}
        onClear={() => setSearchTitle('')}
      />
      <div className={styles.filmsContainer}>
        {data?.search_result.map((film) => (
          <Film key={film.id} {...film} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={data?.total_pages || 1}
        onPageChange={setPage}
      />
    </>
  );
}

export default Films;
