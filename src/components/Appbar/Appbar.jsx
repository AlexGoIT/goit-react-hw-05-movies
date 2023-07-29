import AppBar from '@mui/material/AppBar';
import { NavLink } from 'react-router-dom';
import { Container } from '@mui/material';

import { styledContainer } from './Appbar.styled';

export default function Appbar() {
  return (
    <AppBar position="sticky">
      <Container sx={styledContainer}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </Container>
    </AppBar>
  );
}
