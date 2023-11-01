import { NavLink } from 'react-router-dom';

export default function MovieDetailsPage() {
  return (
    <div>
      <NavLink to="/movies/:movieId/cast">Cast</NavLink>
      <NavLink to="/movies/:movieId/reviews">Reviews</NavLink>
    </div>
  );
}
