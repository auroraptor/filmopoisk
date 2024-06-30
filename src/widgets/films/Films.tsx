import { useState } from "react";
import { useFetchFilmsQuery } from "../../store/services/films";
import Film from "../../features/film/Film";
import Pagination from "../../features/pagination/Pagination";
import styles from "./Films.module.css";

const Films = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useFetchFilmsQuery({
    page: page.toString(),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading films</div>;

  return (
    <>
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
};

export default Films;
