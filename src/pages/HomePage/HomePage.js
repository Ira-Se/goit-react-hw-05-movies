import { MovieList } from 'components/MovieList/MovieList';
import { fetchTrendingMovies } from 'components/api';
import { useEffect, useState } from 'react';
import { HomeTitle } from './HomePage.styled';
import Notiflix from 'notiflix';

export default function HomePage() {
  const [trendList, setTrendList] = useState([]);

  useEffect(() => {
    async function getTrends() {
      try {
        const trends = await fetchTrendingMovies();

        setTrendList(trends);
      } catch (error) {
        Notiflix.Notify.failure('Please reload the page');
        console.log(error);
      }
    }
    getTrends();
  }, []);

  return (
    <main>
      <HomeTitle>TOP-20 OF THE DAY</HomeTitle>
      {trendList && <MovieList currentList={trendList} />}
    </main>
  );
}
