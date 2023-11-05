import { fetchReviews } from 'components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, Message, ReviewAutor } from './Reviews.styled';
import Notiflix from 'notiflix';

export const Reviews = () => {
  const params = useParams();
  const [reviewsInfo, setReviewsInfo] = useState([]);

  useEffect(() => {
    if (!params.movieId) {
      return;
    }
    async function getReviews() {
      try {
        setReviewsInfo(await fetchReviews(params.movieId));
      } catch (error) {
        Notiflix.Notify.failure('Please reload the page');
        console.log(error);
      }
    }
    getReviews();
  }, [params.movieId]);

  return (
    <List>
      {reviewsInfo.length === 0 && (
        <Message>This movie does not have any reviews yet.</Message>
      )}
      {reviewsInfo &&
        reviewsInfo.map(review => (
          <li key={review.id}>
            <ReviewAutor>Author:{review.author}</ReviewAutor>
            <div>{review.content}</div>
          </li>
        ))}
    </List>
  );
};

export default Reviews;
