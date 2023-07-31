import { Button, Input } from '@mui/material';
import Loader from 'components/Loader';
import { useFetchMovie } from 'hooks/useFetchMovie';
import { useSearchParams } from 'react-router-dom';

export default function SearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const query = form.elements.query.value;

    setSearchParams({ query });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="query" placeholder="Search..." />
        <Button type="submit">Search</Button>
      </form>
      <Loader open={false} />
    </>
  );
}
