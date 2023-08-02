import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Pagination from 'components/Pagination';
import { Container } from '@mui/system';
import { getMovie } from 'services/movieAPI';
import SearchForm from 'components/SearchForm';
import MovieList from 'components/MovieList';
import Loader from 'components/Loader';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const page = searchParams.get('page') ?? 1;

  useEffect(() => {
    if (!query) {
      setMovies(null);
      setTotalPages(1);
      return;
    }

    setLoading(true);
    const fetchMovies = async () => {
      try {
        const res = await getMovie(`/search/movie?query=${query}&page=${page}`);

        if (res?.results.length === 0) {
          Notify.failure('Sorry, no movies found');
          setMovies(null);
          setTotalPages(1);
          return;
        }

        setTotalPages(res?.total_pages);
        setMovies(res?.results);
      } catch (err) {
        Notify.failure(`Error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query, page]);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const query = form.elements.query.value.trim();

    if (!query) {
      Notify.warning('Enter the name of the movie, for a correct search!');
      return;
    }

    setSearchParams({ query, page: 1 });
    form.reset();
  };

  const handlePaginationChange = (_, value) => {
    setSearchParams({ query, page: value });
    window.scrollTo(0, 0);
  };

  const isNotEmptyList = movies?.length > 0;
  const isPagination = totalPages > 1;

  return (
    <>
      <Container sx={{ pt: 2, pb: 2 }}>
        <SearchForm onSubmit={handleSubmit} />
        {isNotEmptyList && <MovieList movies={movies} />}
        {isPagination && (
          <Pagination
            count={totalPages}
            onChange={handlePaginationChange}
            page={page}
          />
        )}
      </Container>
      <Loader open={loading} />
    </>
  );
}
