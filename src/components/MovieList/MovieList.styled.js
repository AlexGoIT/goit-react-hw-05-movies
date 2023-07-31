import styled from 'styled-components';

export const List = styled.ul`
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;

  @media (min-width: 475px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
