import AppBar from '@mui/material/AppBar';
import { Container } from '@mui/material';

import { styledContainer, StyledNavLink } from './Appbar.styled';

export default function Appbar() {
  return (
    <AppBar position="sticky">
      <Container sx={styledContainer}>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </Container>
    </AppBar>
  );
}
