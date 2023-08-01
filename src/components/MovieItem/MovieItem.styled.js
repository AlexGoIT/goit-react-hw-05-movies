import styled from 'styled-components';
import { BsFilm } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  /* max-width: 288px; */
  min-width: calc(100% / 5 - 10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 2px 5px 0px rgba(34, 60, 80, 0.2);
`;

export const StyledLink = styled(Link)`
  width: 100%;

  &:hover img {
    transform: scale(1.03);
  }
`;

export const Thumb = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Poster = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  transition: transform 0.2s ease-in-out;
`;

export const NoPoster = styled(BsFilm)`
  width: 60%;
  height: auto;
  object-fit: cover;
  color: #c2c2c2;
`;

export const Title = styled.p`
  padding: 8px;
  font-size: 18px;
  font-weight: bold;
`;
