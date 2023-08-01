import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Item, StyledLink, Thumb, Poster, Title } from './MovieItem.styled';

const MovieItem = ({ movie }) => {
  const location = useLocation();
  const { poster_path } = movie;
  const imgSrc = poster_path
    ? `https://image.tmdb.org/t/p/w342${poster_path}`
    : '';

  const title = movie.title ?? movie.name;

  return (
    <Item>
      <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
        <Thumb>
          <Poster src={imgSrc} alt={title} loading="lazy" />
        </Thumb>
        <Title>{title}</Title>
      </StyledLink>
    </Item>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
