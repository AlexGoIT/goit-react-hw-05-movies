const TopMovieItem = ({ movie }) => {
  return <li>{movie.title ? movie.title : movie.name}</li>;
};

export default TopMovieItem;
