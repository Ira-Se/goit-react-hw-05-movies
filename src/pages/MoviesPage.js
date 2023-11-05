import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { fetchSearchMovies } from 'components/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import NotFoundMovies from 'components/NotFound/NotFoundMovies';

export default function MoviesPage() {
  const [currentValue, setCurrentValue] = useState('');
  const [foundMovies, setFoundhMovies] = useState([]);
  const [params, setParams] = useSearchParams();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const value = params.get('query') ?? '';

    async function getSearchMovies() {
      if (value === '') {
        return;
      }
      try {
        setFoundhMovies(await fetchSearchMovies(value));
        setNotFound(true);
      } catch (error) {
        Notiflix.Notify.failure('No results were found for your request');
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
    }
  };

  return (
    <div>
      <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} />
      {foundMovies.length > 0 && <MovieList currentList={foundMovies} />}
      {foundMovies.length === 0 && notFound && <NotFoundMovies />}
    </div>
  );
}
