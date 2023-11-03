import { fetchReviews } from 'components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const params = useParams();
  const [reviewsInfo, setReviewsInfo] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        setReviewsInfo(await fetchReviews(params.movieId));
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [params.movieId]);

  return (
    <ul>
      {reviewsInfo &&
        reviewsInfo.map(review => (
          <li key={review.id}>
            <h2> Author:{review.author}</h2>
            <div>{review.content}</div>
          </li>
        ))}
    </ul>
  );
};
