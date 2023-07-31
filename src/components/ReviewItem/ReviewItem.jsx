import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import {
  Item,
  AuthorWrapper,
  Thumb,
  AvatarImage,
  ReviewContent,
} from './ReviewItem.style';

const ReviewItem = ({ review }) => {
  const {
    author_details: { avatar_path, username },
    author,
    content,
  } = review;

  const avatarSrc =
    avatar_path && !avatar_path?.includes('https')
      ? `http://image.tmdb.org/t/p/w45${avatar_path}`
      : avatar_path?.slice(1);

  return (
    <Item>
      <AuthorWrapper>
        <Thumb>
          <AvatarImage src={avatarSrc} alt={author} />
        </Thumb>
        <Box>
          <p>Name: {author}</p>
          <p>Username: ({username})</p>
        </Box>
      </AuthorWrapper>
      <ReviewContent>{content}</ReviewContent>
    </Item>
  );
};

export default ReviewItem;

ReviewItem.propTypes = {
  review: PropTypes.shape({
    author_details: PropTypes.shape({
      avatar_path: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired,
  }),
};
