import { Container } from '@mui/material';
import MovieItem from '../MovieItem';
import { List } from './MovieList.styled';

const MovieList = ({ movies }) => {
  return (
    <Container sx={{ pt: 2, pb: 2 }}>
      <h2>Trending today</h2>
      <List>
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </List>
    </Container>
  );
};

export default MovieList;
