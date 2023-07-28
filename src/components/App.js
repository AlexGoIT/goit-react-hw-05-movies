import { useEffect, useState } from 'react';

import { getMovie } from 'services/movieAPI';
import Appbar from './Appbar';
import TopMovieList from './TopMovieList';

document.title = 'HW-5 Movies';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [path, setPath] = useState('');

  useEffect(() => {
    setPath('/trending/all/day');
  }, []);

  useEffect(() => {
    const fetchMovie = async () => {
      if (!path) {
        return;
      }

      try {
        const data = await getMovie(path, page);

        setMovies(data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovie();
  }, [page, path]);

  return (
    <>
      <Appbar />
      <TopMovieList movies={movies} />
    </>
  );
}
