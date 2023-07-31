import styled from 'styled-components';

export const List = styled.ul`
  max-width: 288px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 32px 16px;

  @media (min-width: 475px) {
    max-width: 600px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    max-width: 900px;
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1024px) {
    max-width: 100%;
    grid-template-columns: repeat(5, 1fr);
  }
`;
