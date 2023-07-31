import { useParams } from 'react-router-dom';
import { useFetchMovie } from 'hooks/useFetchMovie';
import ReviewItem from 'components/ReviewItem';
import Loader from 'components/Loader';
import { List } from './ReviewList.styled';

export default function Reviews() {
  const movieId = useParams().movieId;
  const [reviews, open, error] = useFetchMovie(`/movie/${movieId}/reviews`);

  if (error) {
    console.log(error);
    return;
  }

  const isNotEmptyReviews = reviews?.results.length !== 0;

  return (
    <>
      {isNotEmptyReviews ? (
        <List>
          {reviews?.results.map(review => (
            <ReviewItem key={review.id} review={review}></ReviewItem>
          ))}
        </List>
      ) : (
        <div>Reviews not found</div>
      )}
      <Loader open={open} />
    </>
  );
}
