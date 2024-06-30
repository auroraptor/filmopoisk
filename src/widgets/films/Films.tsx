import { useEffect, useState } from "react";
import { useFetchFilmsQuery } from "../../store/services/films";
import Film from "../../features/film/Film";
import Pagination from "../../features/pagination/Pagination";
import SearchInput from "../../features/searchInput/SearchInput";
import styles from "./Films.module.css";
import { GENRES_MAP } from "../../shared/types";

type FilmsProps = {
  filters: { genre: string; year: string };
};

function Films({ filters }: FilmsProps) {
  const [page, setPage] = useState(1);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchParams, setSearchParams] = useState<Record<string, string>>({});

  const { data, isLoading, isError } = useFetchFilmsQuery(searchParams);

  useEffect(() => {
    const params: Record<string, string> = { page: String(page) };
    if (searchTitle) {
      params.title = searchTitle;
    }
    if (filters.genre) {
      console.log('filters.genre', filters.genre)
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
    setSearchParams(params);
  }, [page, searchTitle, filters]);

  useEffect(() => {
    setPage(1);
  }, [searchTitle, filters]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading films</div>;

  const handleSearchChange = (value: string) => {
    setSearchTitle(value);
  };

  return (
    <>
      <SearchInput
        placeholder="Название фильма"
        value={searchTitle}
        onChange={handleSearchChange}
        onClear={() => {
          handleSearchChange('');
          setPage(1);
        }}
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
          onPageChange={setPage}
        />
      ) : null}
    </>
  );
}

export default Films;
