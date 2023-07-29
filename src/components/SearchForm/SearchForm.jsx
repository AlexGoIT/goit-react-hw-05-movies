import { Button, Input } from '@mui/material';
import { Form } from 'react-router-dom';

export default function SearchForm() {
  return (
    <Form>
      <Input />
      <Button type="submit">Search</Button>
    </Form>
  );
}
