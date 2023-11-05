import { useLocation } from 'react-router-dom';
import {
  List,
  MovieItem,
  MovieTitle,
  Poster,
  StyledLink,
} from './MovieList.styled';

export const MovieList = ({ currentList }) => {
  const location = useLocation();

  const defaultPoster =
    'https://ih1.redbubble.net/image.579678625.6248/papergc,500x,w,f8f8f8-pad,750x1000,f8f8f8.u7.jpg';
  return (
    <List>
      {currentList.map(item => (
        <StyledLink
          to={`/movies/${item.id}`}
          key={item.id}
          state={{ from: location }}
        >
          <MovieItem>
            <Poster
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                  : defaultPoster
              }
              alt={item.currentListtitle}
            />
            <MovieTitle>{item.title}</MovieTitle>
          </MovieItem>
        </StyledLink>
      ))}
    </List>
  );
};
export default MovieList;
