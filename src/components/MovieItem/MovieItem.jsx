import { Item, StyledLink, Thumb, Poster, Title } from './MovieItem.styled';

const MovieItem = ({ movie }) => {
  const { poster_path } = movie;
  const imgSrc = poster_path
    ? `https://image.tmdb.org/t/p/w342${poster_path}`
    : '';

  return (
    <Item>
      <StyledLink to={`/movies/${movie.id}`}>
        <Thumb>
          <Poster
            src={imgSrc}
            alt={movie?.title ?? movie?.name}
            loading="lazy"
          />
        </Thumb>
        <Title>{movie?.title ?? movie?.name}</Title>
      </StyledLink>
    </Item>
  );
};

export default MovieItem;
