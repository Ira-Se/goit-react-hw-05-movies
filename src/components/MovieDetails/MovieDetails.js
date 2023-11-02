export const MovieDetails = ({ details }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    details;
  console.log(genres);
  console.log(typeof release_date);

  const year = release_date ? release_date.slice(0, 4) : null;
  const userScore = Math.round(vote_average * 10);
  const movieGenres = genres
    ? genres.map(genre => genre.name).join(', ')
    : null;
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        width="200"
      />
      <div>
        {title} ({year})
      </div>
      <div>User score: {userScore}%</div>
      <div>
        Overview
        {overview}
      </div>
      <div>
        Genres
        {movieGenres}
      </div>
      <div>Additional information</div>
    </div>
  );
};

// key={details.id}>
//       {details.title} {details.release_date}
//       <Cast />
//       <Reviews />
