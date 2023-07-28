import { Container } from '@mui/material';
import TopMovieItem from 'components/TopMovieItem/TopMovieItem';

const TopMovieList = ({ movies }) => {
  return (
    <Container maxWidth="lg">
      <ul>
        {movies.map(movie => (
          <TopMovieItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </Container>
  );
};

export default TopMovieList;
