import { PropTypes } from 'prop-types';
import { PaginationWrapper, StyledPagination } from './Pagination.styled';

export default function Pagination({ count, onChange, page }) {
  return (
    <PaginationWrapper>
      <StyledPagination
        count={count}
        variant="outlined"
        shape="rounded"
        onChange={onChange}
        page={page}
      />
    </PaginationWrapper>
  );
}

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};
