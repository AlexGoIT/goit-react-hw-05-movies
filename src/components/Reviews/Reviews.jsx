import { useParams } from 'react-router-dom';

export default function Reviews() {
  const movieId = useParams().movieId;
  return <div>Reviews {movieId}</div>;
}
