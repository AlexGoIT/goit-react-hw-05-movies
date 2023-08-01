import { useParams } from 'react-router-dom';
import { useFetchMovie } from 'hooks/useFetchMovie';
import { List } from './CastList.styled';
import CastItem from '../CastItem';
import Loader from 'components/Loader';
import { Notify } from 'notiflix';

export default function Cast() {
  const movieId = useParams().movieId;
  const [credits, open, error] = useFetchMovie(`/movie/${movieId}/credits`);

  if (error) {
    Notify(error.message);
    return;
  }

  const isNotEmptyCredits = credits?.cast.length !== 0;

  return (
    <>
      {isNotEmptyCredits ? (
        <List>
          {credits &&
            credits?.cast.map(item => (
              <CastItem key={item.cast_id} item={item} />
            ))}
        </List>
      ) : (
        <div>There are no casts...</div>
      )}
      <Loader open={open} />
    </>
  );
}
