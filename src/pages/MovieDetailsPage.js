import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { fetchMovieById } from 'components/api';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

export default function MovieDetailsPage() {
  const params = useParams();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    async function getDetails() {
      try {
        setDetails(await fetchMovieById(params.movieId));
      } catch (error) {
        console.log(error);
      }
    }
    getDetails();
  }, [params.movieId]);

  return (
    <div>
      {params.movieId}

      <MovieDetails details={details} />
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
      <Outlet />
    </div>
  );
}
