import { Container, Typography } from '@mui/material';
import Loader from 'components/Loader';
import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovie } from 'services/movieAPI';
import { Poster } from './MovieDetails.styled';

export default function MoviesDetails() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovie = async () => {
      setOpen(true);
      try {
        const data = await getMovie(`/movie/${movieId}`);

        setMovie(data);
      } catch (err) {
        console.log(err);
      } finally {
        setOpen(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  const imgSrc = movie?.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : '';

  return (
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
      <Loader open={open} />
    </Container>
  );
}
