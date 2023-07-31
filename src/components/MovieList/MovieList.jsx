import { Container, Typography } from '@mui/material';
import MovieItem from '../MovieItem';
import { List } from './MovieList.styled';

const MovieList = ({ movies }) => {
  return (
    <Container sx={{ pt: 2, pb: 2 }}>
      <Typography variant="h3" component="h2" sx={{ mt: 2, mb: 2 }}>
        Trending today
      </Typography>
      <List>
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </List>
    </Container>
  );
};

export default MovieList;
