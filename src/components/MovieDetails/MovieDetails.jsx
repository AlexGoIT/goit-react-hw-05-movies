import { Container, Typography } from '@mui/material';
import Loader from 'components/Loader';
import { Link, Outlet, useParams } from 'react-router-dom';
import { Poster } from './MovieDetails.styled';
import { useFetchMovie } from 'hooks/useFetchMovie';

export default function MoviesDetails() {
  const { movieId } = useParams();

  const [movie, open, error] = useFetchMovie(`/movie/${movieId}`);

  const imgSrc = movie?.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : '';

  return (
    <>
      {!error && (
        <Container>
          <Typography variant="h3" component="h2" sx={{ mt: 2, mb: 2 }}>
            {movie?.title ?? movie?.name}
          </Typography>
          <Poster
            src={imgSrc}
            alt={movie?.title ?? movie?.name}
            loading="lazy"
          ></Poster>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </Container>
      )}
      <Loader open={open} />
    </>
  );
}
