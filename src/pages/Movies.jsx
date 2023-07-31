import { Container } from '@mui/system';
import SearchForm from 'components/SearchForm';

export default function Movies() {
  return (
    <>
      <Container sx={{ pt: 2, pb: 2 }}>
        <h2>Movies</h2>
        <SearchForm />
      </Container>
    </>
  );
}
