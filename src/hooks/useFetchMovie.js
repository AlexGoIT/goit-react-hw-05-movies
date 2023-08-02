import { useEffect, useState } from 'react';
import { getMovie } from 'services/movieAPI';

export const useFetchMovie = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const data = await getMovie(url);

        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [url]);

  return [data, loading, error];
};
