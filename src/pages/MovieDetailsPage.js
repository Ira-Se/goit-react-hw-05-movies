import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { fetchMovieById } from 'components/api';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

export default function MovieDetailsPage() {
  const params = useParams();
  console.log(params);

  const [details, setDetails] = useState([]);

  useEffect(() => {
    async function getDetails() {
      try {
        setDetails(await fetchMovieById(params.movieId));
      } catch (error) {
        console.log(error);
      }

      console.log(params.movieId);
    }
    getDetails();
  }, [params.movieId]);

  console.log(details);
  return (
    <div>
      {params.movieId}

      <MovieDetails details={details} />
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="/movies/:movieId/reviews">Reviews</NavLink>
    </div>
  );
}
