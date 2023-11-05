import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { fetchMovieById } from 'components/api';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  AddInfo,
  CardContainer,
  SectionTitle,
  StyledLink,
} from './MovieDetailsPage.styled';

import { StyledNavLink } from 'components/Layout';
import Notiflix from 'notiflix';
import { Loader } from 'components/Loader/Loader';

export default function MovieDetailsPage() {
  const params = useParams();
  const location = useLocation();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    if (!params.movieId) {
      return;
    }
    async function getDetails() {
      try {
        setDetails(await fetchMovieById(params.movieId));
      } catch (error) {
        Notiflix.Notify.failure('Please reload the page');
        console.log(error);
      }
    }
    getDetails();
  }, [params.movieId]);

  const backLink = location.state?.from ?? '/';

  return (
    <CardContainer>
      <StyledLink to={backLink}>Go back</StyledLink>
      {details && <MovieDetails details={details} />}
      <AddInfo>
        <SectionTitle>Additional information</SectionTitle>
        <StyledNavLink to="cast" state={{ from: backLink }}>
          Cast
        </StyledNavLink>
        <StyledNavLink to="reviews" state={{ from: backLink }}>
          Reviews
        </StyledNavLink>
        {/* <Outlet /> */}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </AddInfo>
    </CardContainer>
  );
}
