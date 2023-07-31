import { useParams } from 'react-router-dom';
import { useFetchMovie } from 'hooks/useFetchMovie';
import { List } from './CastList.styled';
import CastItem from '../CastItem';
import Loader from 'components/Loader';

export default function Cast() {
  const movieId = useParams().movieId;
  const [credits, open, error] = useFetchMovie(`/movie/${movieId}/credits`);

  if (error) {
    return <div>Cast ERROR</div>;
  }

  return (
    <>
      <List>
        {credits &&
          credits?.cast.map(item => (
            <CastItem key={item.cast_id} item={item} />
          ))}
      </List>
      <Loader open={open} />
    </>
  );
}
