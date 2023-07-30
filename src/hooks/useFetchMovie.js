import { useEffect, useState } from 'react';
import { getMovie } from 'services/movieAPI';

export const useFetchMovie = url => {
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      setOpen(true);
      try {
        const data = await getMovie(url);

        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setOpen(false);
      }
    };

    fetchMovie();
  }, [url]);

  return [data, open, error];
};
