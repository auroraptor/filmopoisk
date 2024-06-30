import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './FilmPage.module.css';
import FilmDetails from '@/components/filmDetails/FilmDetails';
import ActorsSlider from '@/components/actorsSlider/ActorsSlider';
import { FullMovieInfo } from '@/shared/types';
import { fetchFilmById } from '@/shared/utils/fetchFilmById';

function FilmPage() {
  const router = useRouter();
  const { id } = router.query;
  const [film, setFilm] = useState<FullMovieInfo | null>(null);

  useEffect(() => {
    if (!id) return;
    fetchFilmById(id as string).then((data) => setFilm(data));
  }, [id]);

  if (!film) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.filmPage}>
      <FilmDetails film={film} />
      <ActorsSlider actors={film.actors} />
    </div>
  );
}

export default FilmPage;
