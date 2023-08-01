import { Container } from '@mui/material';
import Loader from 'components/Loader';
import TopMovieList from 'components/MovieList';
import { useFetchMovie } from 'hooks/useFetchMovie';

export default function App() {
  const [movies, open, error] = useFetchMovie('/trending/all/day');
  const isNotEmptyList = movies && movies.results.length > 0;

  return (
    <>
      <Container sx={{ pt: 2, pb: 2 }}>
        <h2>Trending today</h2>
        {!open && !error && isNotEmptyList && (
          <TopMovieList movies={movies.results} />
        )}
      </Container>
      <Loader open={open} />
    </>
  );
}
