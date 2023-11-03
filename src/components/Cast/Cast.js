import { fetchCast } from 'components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const params = useParams();
  const [castInfo, setCastInfo] = useState([]);

  useEffect(() => {
    async function getCast() {
      try {
        setCastInfo(await fetchCast(params.movieId));
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, [params.movieId]);

  return (
    <ul>
      {castInfo &&
        castInfo.map(actor => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : null
              }
              alt={actor.name}
              width="100"
            />
            <div>{actor.name}</div>
            <div> Character: {actor.character}</div>
          </li>
        ))}
    </ul>
  );
};
