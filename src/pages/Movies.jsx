import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Container } from '@mui/system';
import { getMovie } from 'services/movieAPI';
import SearchForm from 'components/SearchForm';
import MovieList from 'components/MovieList';
import Loader from 'components/Loader';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      setMovies(null);
      return;
    }

    setLoading(true);
    const fetchMovies = async () => {
      try {
        const res = await getMovie(`/search/movie?query=${query}`);

        if (res?.results.length === 0) {
          Notify.failure('Sorry, no movies found');
          setMovies(null);
          return;
        }

        setMovies(res?.results);
      } catch (err) {
        Notify.failure(`Error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const query = form.elements.query.value.trim();

    if (!query) {
      Notify.warning('Enter the name of the movie, for a correct search!');
      return;
    }

    setSearchParams({ query });
    form.reset();
  };

  const isNotEmptyList = movies?.length > 0;

  return (
    <>
      <Container sx={{ pt: 2, pb: 2 }}>
        <SearchForm onSubmit={handleSubmit} />
        {isNotEmptyList && <MovieList movies={movies} />}
      </Container>
      <Loader open={loading} />
    </>
  );
}
