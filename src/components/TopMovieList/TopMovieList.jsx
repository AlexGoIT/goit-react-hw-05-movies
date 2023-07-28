import { Container } from '@mui/material';
import TopMovieItem from 'components/TopMovieItem/TopMovieItem';
import { TopMovieTitle, List } from './TopMovieList.styled';

const TopMovieList = ({ movies }) => {
  return (
    <Container maxWidth="md" sx={{ paddingBlock: '20px' }}>
      <TopMovieTitle>Top Movies in days</TopMovieTitle>
      <List>
        {movies.map(movie => (
          <TopMovieItem key={movie.id} movie={movie} />
        ))}
      </List>
    </Container>
  );
};

export default TopMovieList;
