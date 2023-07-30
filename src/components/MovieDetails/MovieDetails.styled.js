import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Poster = styled.img`
  max-width: 260px;
  height: 360px;
  margin-right: 20px;
  object-fit: cover;
  object-position: center;
  background-color: bisque;
`;

export const StyledLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  color: blue;

  &.active {
    color: tomato;
  }
`;
