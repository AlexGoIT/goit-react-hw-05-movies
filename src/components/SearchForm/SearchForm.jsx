import PropTypes from 'prop-types';
import { Button, Input } from '@mui/material';
import Loader from 'components/Loader';

export default function SearchForm({ onSubmit }) {
  return (
    <>
      <form onSubmit={onSubmit}>
        <Input type="text" name="query" placeholder="Search..." />
        <Button type="submit">Search</Button>
      </form>
      <Loader open={false} />
    </>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
