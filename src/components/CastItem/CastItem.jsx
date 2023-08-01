import PropTypes from 'prop-types';
import {
  Item,
  Thumb,
  ProfileImage,
  ActorName,
  Character,
} from './CastItem.styled';
import noAvatar from 'images/no-avatar.png';

export default function CastItem({ item }) {
  const { character, name, profile_path } = item;
  const imgSrc = profile_path
    ? `https://image.tmdb.org/t/p/w185${profile_path}`
    : '';

  return (
    <>
      <Item>
        <Thumb>
          {imgSrc ? (
            <ProfileImage src={imgSrc} alt={name} loading="lazy" />
          ) : (
            <ProfileImage src={noAvatar} alt={name} />
          )}
        </Thumb>
        <ActorName>{name}</ActorName>
        <Character>{character}</Character>
      </Item>
    </>
  );
}

CastItem.propTypes = {
  item: PropTypes.shape({
    character: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
  }).isRequired,
};
