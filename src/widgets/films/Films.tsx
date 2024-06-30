import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFetchFilmsQuery } from '../../store/services/films';
import Film from '../../features/film/Film';
import Pagination from '../../features/pagination/Pagination';
import SearchInput from '../../features/searchInput/SearchInput';
import styles from './Films.module.css';
import { GENRES_MAP } from '../../shared/types';

type FilmsProps = {
  filters: { genre: string; year: string };
};

function Films({ filters }: FilmsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
  const [searchTitle, setSearchTitle] = useState(searchParams.get('title') || '');
  const [queryParams, setQueryParams] = useState<Record<string, string>>({});

  const { data, isLoading, isError } = useFetchFilmsQuery(queryParams);

  useEffect(() => {
    const params: Record<string, string> = { page: String(page) };
    if (searchTitle) {
      params.title = searchTitle;
    }
    if (filters.genre) {
      const genreInEnglish = Object.keys(GENRES_MAP).find(
        key => GENRES_MAP[key as keyof typeof GENRES_MAP] === filters.genre.trim().toLowerCase()
      ) as string;
      if (genreInEnglish) {
        params.genre = genreInEnglish;
      }
    }
    if (filters.year) {
      params.release_year = filters.year;
    }
    setQueryParams(params);
    setSearchParams(params, { replace: true });
  }, [page, searchTitle, filters]);

  useEffect(() => {
    setPage(1);
  }, [searchTitle]);

  const handleSearchChange = (value: string) => {
    setSearchTitle(value);
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      if (value) {
        newParams.set('title', value);
      } else {
        newParams.delete('title');
      }
      newParams.set('page', '1');
      return newParams;
    });
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      newParams.set('page', String(newPage));
      return newParams;
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading films</div>;

  return (
    <>
      <SearchInput
        placeholder="Название фильма"
        value={searchTitle}
        onChange={handleSearchChange}
        onClear={() => handleSearchChange('')}
      />
      <div className={styles.filmsContainer}>
        {data?.search_result.map((film) => (
          <Film key={film.id} {...film} />
        ))}
      </div>
      {data?.total_pages && data.total_pages > 1 ? (
        <Pagination
          currentPage={page}
          totalPages={data?.total_pages || 1}
          onPageChange={handlePageChange}
        />
      ) : null}
    </>
  );
}

export default Films;
