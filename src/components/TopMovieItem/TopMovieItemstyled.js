import styled from 'styled-components';

export const Item = styled.li`
  min-width: calc(100% / 4 - 10px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Poster = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
`;

export const Title = styled.p`
  padding: 8px;
  font-size: 18px;
  font-weight: bold;
`;
