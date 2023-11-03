import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { fetchSearchMovies } from 'components/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [currentValue, setCurrentValue] = useState('');
  const [foundMovies, setFoundhMovies] = useState([]);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const value = params.get('query') ?? '';

    async function getSearchMovies() {
      try {
        setFoundhMovies(await fetchSearchMovies(value));
      } catch (error) {
        console.log(error);
      }
    }
    getSearchMovies();
  }, [params]);

  const handleChange = evt => {
    setCurrentValue(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    setParams({ query: currentValue });
  };

  return (
    <div>
      <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} />
      <MovieList currentList={foundMovies} />
    </div>
  );
}
