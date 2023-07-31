import { Container } from '@mui/system';
import SearchForm from 'components/SearchForm';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovie } from 'services/movieAPI';
import MovieList from 'components/MovieList';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      const movies = await getMovie(`/search/movie?query=${query}`);

      setMovies(movies.results);
    };

    fetchMovies();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const query = form.elements.query.value.trim();

    if (!query) {
      setSearchParams({});
      setMovies([]);
      return;
    }

    setSearchParams({ query });
    form.reset();
  };

  const isNotEmptyList = movies.length > 0;

  return (
    <>
      <Container sx={{ pt: 2, pb: 2 }}>
        <SearchForm onSubmit={handleSubmit} />
        {isNotEmptyList && <MovieList movies={movies} />}
      </Container>
    </>
  );
}
