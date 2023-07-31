import { Box } from '@mui/system';
import {
  Item,
  AuthorWrapper,
  Thumb,
  AvatarImage,
  ReviewContent,
} from './ReviewItem.style';

export default function ReviewItem({ review }) {
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
}
