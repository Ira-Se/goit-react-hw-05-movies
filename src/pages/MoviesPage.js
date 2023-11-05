import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { fetchSearchMovies } from 'components/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';

export default function MoviesPage() {
  const [currentValue, setCurrentValue] = useState('');
  const [foundMovies, setFoundhMovies] = useState([]);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const value = params.get('query') ?? '';

    async function getSearchMovies() {
      if (value === '') {
        return;
      }
      try {
        setFoundhMovies(await fetchSearchMovies(value));
      } catch (error) {
        Notiflix.Notify.failure('Please reload the page');
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
    console.log(foundMovies.length);

    if (currentValue === '') {
      Notiflix.Notify.failure('Fill in the search field');
      return;
    } else if (foundMovies.length === 0) {
      Notiflix.Notify.failure('No results were found for your request');
    }
  };

  return (
    <div>
      {currentValue && (
        <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} />
      )}
      {foundMovies && <MovieList currentList={foundMovies} />}
    </div>
  );
}
