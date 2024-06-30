import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import styles from './Films.module.css';
import { useFetchFilmsQuery } from '@/store/services/films';
import { GENRES_MAP } from '@/shared/types';
import SearchInput from '../searchInput/SearchInput';
import Film from '../film/Film';
import Pagination from '../pagination/Pagination';

type FilmsProps = {
  filters: { genre: string; year: string };
};

function Films({ filters }: FilmsProps) {
  const router = useRouter();
  const [page, setPage] = useState(Number(router.query.page) || 1);
  const [searchTitle, setSearchTitle] = useState((router.query.title as string) || '');
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
    router.push({
      pathname: router.pathname,
      query: params,
    }, undefined, { shallow: true });
  }, [page, searchTitle, filters]);

  useEffect(() => {
    setPage(1);
  }, [searchTitle, filters]);

  const handleSearchChange = useCallback((value: string) => {
    setSearchTitle(value);
    const newParams = { ...router.query, title: value || undefined, page: '1' };
    router.push({
      pathname: router.pathname,
      query: newParams,
    }, undefined, { shallow: true });
  }, [router]);

  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage);
    const newParams = { ...router.query, page: String(newPage) };
    router.push({
      pathname: router.pathname,
      query: newParams,
    }, undefined, { shallow: true });
  }, [router]);

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
