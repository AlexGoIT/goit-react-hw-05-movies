import { Box, Container, List, Typography } from '@mui/material';
import Loader from 'components/Loader';
import { Outlet, useParams } from 'react-router-dom';
import { Poster, StyledLink } from './MovieDetails.styled';
import { useFetchMovie } from 'hooks/useFetchMovie';

export default function MoviesDetails() {
  const { movieId } = useParams();
  const [movie, open, error] = useFetchMovie(`/movie/${movieId}`);
  const imgSrc = movie?.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : '';
  const voteAverage = Math.floor(movie?.vote_average * 10);

  return (
    <>
      {!error && (
        <Container>
          <Box sx={{ mt: 2, display: 'flex' }}>
            <Poster
              src={imgSrc}
              alt={movie?.title ?? movie?.name}
              loading="lazy"
            ></Poster>
            <Box>
              <Typography variant="h4" component="h2">
                {movie?.title ?? movie?.name}
              </Typography>
              <div>
                User score: {voteAverage ? `${voteAverage}%` : 'No score'}
              </div>
              <div>Review</div>
              <div>{movie?.overview ? movie?.overview : 'No overview'}</div>
              <div>Genre</div>
              <div>{movie?.genres.map(({ name }) => name).join(', ')}</div>
            </Box>
          </Box>

          <List spacing={2} sx={{ display: 'flex', gap: 2 }}>
            <li>
              <StyledLink to="cast">Cast</StyledLink>
            </li>
            <li>
              <StyledLink to="reviews">Reviews</StyledLink>
            </li>
          </List>
          <Outlet />
        </Container>
      )}
      <Loader open={open} />
    </>
  );
}
