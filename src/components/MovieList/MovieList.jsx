import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import MovieItem from '../MovieItem';
import { List } from './MovieList.styled';

export default function MovieList({ movies }) {
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
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};
