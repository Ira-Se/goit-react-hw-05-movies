import { Poster } from 'components/MovieList/MovieList.styled';
import {
  Container,
  Details,
  MovieInfo,
  TextItem,
  Title,
} from './MovieDetails.styled';

export const MovieDetails = ({ details }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    details;

  const year = release_date && release_date.slice(0, 4);
  const userScore = Math.round(vote_average * 10);
  const movieGenres = genres && genres.map(genre => genre.name).join(', ');
  return (
    <Container>
      <MovieInfo>
        <Poster
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : null
          }
          alt={title}
          width="200"
        />
        <Details>
          <Title>
            {title} ({year})
          </Title>

          <div>
            <TextItem>User score:</TextItem> {userScore}%
          </div>
          <div>
            <TextItem> Overview:</TextItem>
            {overview}
          </div>
          <div>
            <TextItem> Genres:</TextItem>
            {movieGenres}
          </div>
        </Details>
      </MovieInfo>
    </Container>
  );
};
export default MovieDetails;
