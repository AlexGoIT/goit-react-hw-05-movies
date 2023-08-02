import { Outlet, useParams, useLocation } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { useRef } from 'react';
import { Box, Container } from '@mui/material';
import Rating from '@mui/material/Rating';
import { useFetchMovie } from 'hooks/useFetchMovie';
import { Notify } from 'notiflix';

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
  StyledNavLink,
  MovieScoreWrapper,
} from './MovieDetails.styled';

export default function MoviesDetails() {
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/movies');

  const { movieId } = useParams();
  const [movie, loading, error] = useFetchMovie(`/movie/${movieId}`);

  const imgSrc = movie?.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '';
  const voteAverage = Math.floor(movie?.vote_average) / 2;

  if (error) {
    Notify.failure(error.message);
  }

  return (
    <>
      {!error && (
        <Container sx={{ pt: 2, pb: 2 }}>
          <StyledLink to={backLinkLocation.current}>
            <BiLeftArrowAlt size={20} />
            Go Back
          </StyledLink>
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
              <MovieScoreWrapper>
                <MovieScore>User score:</MovieScore>
                <Rating
                  name="half-rating-read"
                  value={voteAverage}
                  precision={0.5}
                  size="small"
                  readOnly
                />
              </MovieScoreWrapper>
              <MovieSubTitle>Review</MovieSubTitle>
              <MovieReview>
                {movie?.overview ? movie?.overview : 'No information'}
              </MovieReview>
              <MovieSubTitle>Genre</MovieSubTitle>
              <MovieGenre>
                {movie?.genres.length > 0
                  ? movie?.genres.map(({ name }) => name).join(', ')
                  : 'No information'}
              </MovieGenre>
            </Box>
          </Box>

          <List>
            <li>
              <StyledNavLink to="cast">Cast</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="reviews">Reviews</StyledNavLink>
            </li>
          </List>
          <Outlet />
        </Container>
      )}
      <Loader open={loading} />
    </>
  );
}
