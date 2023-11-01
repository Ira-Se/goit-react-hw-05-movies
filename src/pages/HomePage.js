import { MovieList } from 'components/MovieList/MovieList';
import { fetchTrendingMovies } from 'components/api';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [trendList, setTrendList] = useState([]);

  useEffect(() => {
    async function getTrends() {
      try {
        const trends = await fetchTrendingMovies();

        setTrendList(trends);
      } catch (error) {
        console.log(error);
      }
    }
    getTrends();
  }, []);

  return (
    <div>
      <MovieList trendList={trendList} />
    </div>
  );
}
