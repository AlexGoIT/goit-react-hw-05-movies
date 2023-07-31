import Loader from 'components/Loader';
import TopMovieList from 'components/MovieList';
import { useFetchMovie } from 'hooks/useFetchMovie';

export default function App() {
  const [movies, open, error] = useFetchMovie('/trending/all/day');
  const isNotEmptyList = movies && movies.results.length > 0;

  return (
    <>
      {!open && !error && isNotEmptyList && (
        <TopMovieList movies={movies.results} />
      )}
      <Loader open={open} />
    </>
  );
}
