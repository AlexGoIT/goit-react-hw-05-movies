import PropTypes from 'prop-types';
// import { Button, Input } from '@mui/material';
import Loader from 'components/Loader';
import { Form, SearchInput, SearchButton } from './SearchForm.styled';

export default function SearchForm({ onSubmit }) {
  return (
    <>
      <Form onSubmit={onSubmit}>
        <SearchInput
          type="text"
          name="query"
          placeholder="Search..."
          sx={{ p: 0 }}
        />
        <SearchButton type="submit" variant="contained">
          Search
        </SearchButton>
      </Form>
      <Loader open={false} />
    </>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
