import { useParams } from 'react-router-dom';

export default function Cast() {
  const movieId = useParams().movieId;
  return <div>Cast {movieId}</div>;
}
