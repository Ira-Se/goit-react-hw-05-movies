export const SearchForm = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button>Search</button>
    </form>
  );
};
