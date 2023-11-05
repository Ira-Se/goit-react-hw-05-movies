import { fetchCast } from 'components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, CastItem, CastText, List, Message } from './Cast.styled';
import Notiflix from 'notiflix';

const Cast = () => {
  const params = useParams();
  const [castInfo, setCastInfo] = useState([]);

  const defaultAvatar =
    'https://anubis.gr/wp-content/uploads/2018/03/no-avatar.png';

  useEffect(() => {
    if (!params.movieId) {
      return;
    }
    async function getCast() {
      try {
        setCastInfo(await fetchCast(params.movieId));
      } catch (error) {
        Notiflix.Notify.failure('Please reload the page');
        console.log(error);
      }
    }
    getCast();
  }, [params.movieId]);

  return (
    <List>
      {castInfo.length === 0 && (
        <Message>Sorry, no information about cast</Message>
      )}
      {castInfo &&
        castInfo.map(actor => (
          <CastItem key={actor.id}>
            <Avatar
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : defaultAvatar
              }
              alt={actor.name}
              width="100"
            />
            <CastText>{actor.name}</CastText>
            <CastText fontSize="10">
              Character:
              <br />
              {actor.character}
            </CastText>
          </CastItem>
        ))}
    </List>
  );
};

export default Cast;
