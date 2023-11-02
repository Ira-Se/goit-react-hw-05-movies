import { fetchCast } from 'components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const params = useParams();
  const [castInfo, setCastInfo] = useState([]);

  console.log(params);

  useEffect(() => {
    async function getCast() {
      try {
        setCastInfo(await fetchCast(params.moviedId));
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, [params.moviedId]);

  return <div>{castInfo}</div>;
};

export default Cast;
