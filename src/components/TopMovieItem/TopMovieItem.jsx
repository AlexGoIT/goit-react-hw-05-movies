import { Item, Poster, Title } from './TopMovieItemstyled';

const TopMovieItem = ({ movie }) => {
  const { poster_path } = movie;
  const imgSrc = poster_path
    ? `https://image.tmdb.org/t/p/w154${poster_path}`
    : '';
  return (
    <Item>
      <Poster
        src={imgSrc}
        alt={movie.title ? movie.title : movie.name}
        loading="lazy"
      />
      <Title>{movie.title ? movie.title : movie.name}</Title>
    </Item>
  );
};

export default TopMovieItem;
