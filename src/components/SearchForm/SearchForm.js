import { Form, Input, Button } from './SearchForm.styled';

export const SearchForm = ({ handleSubmit, handleChange }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" onChange={handleChange} />
      <Button>Search</Button>
    </Form>
  );
};

export default SearchForm;
