import { PaginationWrapper, StyledPagination } from './Pagination.styled';

export default function Pagination({ count, onChange, page }) {
  return (
    <PaginationWrapper>
      <StyledPagination
        count={count}
        variant="outlined"
        shape="rounded"
        onChange={onChange}
        page={Number(page)}
      />
    </PaginationWrapper>
  );
}
