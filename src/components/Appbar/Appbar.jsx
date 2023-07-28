import AppBar from '@mui/material/AppBar';
import { Container } from '@mui/material';
import { MenuWrapper } from './Appbar.styled';

const Appbar = () => {
  return (
    <AppBar position="static">
      <Container
        maxWidth="lg"
        sx={{ height: '50px', display: 'flex', alignItems: 'center' }}
      >
        Home Movies
      </Container>
    </AppBar>
  );
};

export default Appbar;
