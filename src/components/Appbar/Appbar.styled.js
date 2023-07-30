import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const styledContainer = {
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
};

export const StyledNavLink = styled(NavLink)`
  padding: 6px;
  /* font-size: 16px; */
  font-weight: bold;
  background-color: #2196f3;
  border-radius: 6px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &.active {
    background-color: #ff9100;
  }
`;
