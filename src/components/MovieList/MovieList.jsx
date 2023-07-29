import { Container, Typography } from '@mui/material';
import Loader from 'components/Loader';
import { useEffect, useState } from 'react';
import { getMovie } from 'services/movieAPI';
import MovieItem from '../MovieItem';
import { List } from './MovieList.styled';

const MovieList = ({ showLoading }) => {
  const [movies, setMovies] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setOpen(true);
      try {
        const data = await getMovie('/trending/all/day');

        setMovies(data.results);
      } catch (err) {
        console.log(err);
      } finally {
        setOpen(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Container>
      <Typography variant="h3" component="h2" sx={{ mt: 2, mb: 2 }}>
        Trending today
      </Typography>
      <List>
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </List>
      <Loader open={open} />
    </Container>
  );
};

export default MovieList;
