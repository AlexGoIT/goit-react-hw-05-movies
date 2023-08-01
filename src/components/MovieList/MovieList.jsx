import PropTypes from 'prop-types';
import MovieItem from '../MovieItem';
import { List } from './MovieList.styled';

export default function MovieList({ movies }) {
  return (
    <List>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </List>
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
