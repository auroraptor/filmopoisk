import FilmPage from '@/components/FilmPage';
import { useRouter } from 'next/router';

const Film = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return null;

  return <FilmPage id={String(id)} />;
};

export default Film;
