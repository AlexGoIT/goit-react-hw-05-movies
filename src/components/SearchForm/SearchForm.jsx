import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import { Form, SearchInput, SearchButton } from './SearchForm.styled';

export default function SearchForm({ onSubmit }) {
  return (
    <>
      <Form onSubmit={onSubmit}>
        <SearchInput name="query" />
        <SearchButton type="submit">Search</SearchButton>
      </Form>
      <Loader open={false} />
    </>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
