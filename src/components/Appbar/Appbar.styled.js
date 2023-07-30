import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const styledContainer = {
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
};

export const StyledNavLink = styled(NavLink)`
  font-weight: bold;
  border-radius: 6px;
  position: relative;

  &.active::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background-color: #ff9100;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;
