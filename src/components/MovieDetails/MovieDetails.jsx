import { Outlet, useParams } from 'react-router-dom';
import { useFetchMovie } from 'hooks/useFetchMovie';
import { Box, Container } from '@mui/material';
import Loader from 'components/Loader';
import {
  List,
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
    : '';
  const voteAverage = Math.floor(movie?.vote_average * 10);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {!error && (
        <Container sx={{ pt: 2, pb: 2 }}>
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

          <List sx={{ pt: 4, pb: 4, display: 'flex', gap: 2 }}>
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
