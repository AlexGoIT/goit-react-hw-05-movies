import { Outlet, useParams } from 'react-router-dom';
import { useFetchMovie } from 'hooks/useFetchMovie';
import { Box, Container, List } from '@mui/material';
import Loader from 'components/Loader';
import {
  Thumb,
  Poster,
  NoPoster,
  MovieTitle,
  MovieScore,
  MovieSubTitle,
  MovieReview,
  MovieGenre,
  StyledLink,
} from './MovieDetails.styled';

export default function MoviesDetails() {
  const { movieId } = useParams();
  const [movie, open, error] = useFetchMovie(`/movie/${movieId}`);
  const imgSrc = movie?.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : null;
  const voteAverage = Math.floor(movie?.vote_average * 10);

  return (
    <>
      {!error && (
        <Container sx={{ pt: 2 }}>
          <Box sx={{ display: 'flex' }}>
            <Thumb>
              {imgSrc ? (
                <Poster
                  src={imgSrc}
                  alt={movie?.title ?? movie?.name}
                  loading="lazy"
                ></Poster>
              ) : (
                <NoPoster />
              )}
            </Thumb>
            <Box>
              <MovieTitle>{movie?.title ?? movie?.name}</MovieTitle>
              <MovieScore>
                User score: {voteAverage ? `${voteAverage}%` : 'No score'}
              </MovieScore>
              <MovieSubTitle>Review</MovieSubTitle>
              <MovieReview>
                {movie?.overview ? movie?.overview : 'No overview'}
              </MovieReview>
              <MovieSubTitle>Genre</MovieSubTitle>
              <MovieGenre>
                {movie?.genres.map(({ name }) => name).join(', ')}
              </MovieGenre>
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
