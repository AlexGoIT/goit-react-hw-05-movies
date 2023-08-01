import { NavLink, Link } from 'react-router-dom';
import { BsFilm } from 'react-icons/bs';
import styled from 'styled-components';

export const List = styled.ul`
  padding: 8px 0;
  margin: 8px 0;
  display: flex;
  gap: 16px;
  border-top: 2px solid #c2c2c2;
  border-bottom: 2px solid #c2c2c2;
`;

export const Thumb = styled.div`
  min-width: 260px;
  min-height: 360px;
  margin-right: 20px;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 2px 5px 0px rgba(34, 60, 80, 0.2);
`;

export const Poster = styled.img`
  max-width: 260px;
  height: auto;
  object-fit: cover;
  object-position: center;
  background-color: bisque;
`;

export const NoPoster = styled(BsFilm)`
  width: calc(100% - 150px);
  height: auto;
  object-fit: cover;
  color: #c2c2c2;
`;

export const MovieTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export const MovieScoreWrapper = styled.div`
  padding: 16px 0;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const MovieScore = styled.p`
  margin-right: 4px;
  font-size: 18px;
`;

export const MovieSubTitle = styled.p`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: bold;
`;

export const MovieReview = styled.p`
  margin-bottom: 16px;
  text-align: justify;
`;

export const MovieGenre = styled.p``;

export const StyledLink = styled(Link)`
  max-width: 100px;
  padding: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  background-color: rgb(240, 240, 240);
  box-shadow: 1px 2px 5px 0px rgba(34, 60, 80, 0.2);
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  color: blue;

  &.active {
    color: tomato;
  }
`;
