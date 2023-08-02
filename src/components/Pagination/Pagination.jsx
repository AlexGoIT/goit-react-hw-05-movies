import { PaginationWrapper, StyledPagination } from './Pagination.styled';

export default function Pagination({ count, onChange }) {
  return (
    <PaginationWrapper>
      <StyledPagination
        count={count}
        variant="outlined"
        shape="rounded"
        onChange={onChange}
      />
    </PaginationWrapper>
  );
}
