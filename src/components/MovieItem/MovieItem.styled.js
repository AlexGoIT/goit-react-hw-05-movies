import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  min-width: calc(100% / 4 - 20px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  width: 100%;

  &:hover img {
    transform: scale(1.03);
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  transition: transform 0.2s ease-in-out;
`;

export const Title = styled.p`
  padding: 8px;
  font-size: 18px;
  font-weight: bold;
`;
