// import HomePage from "pages/HomePage/HomePage"
import MovieDetailsPage from "pages/MovieDetailsPage/MovieDetailsPage"
// import MoviesPage from "pages/MoviesPage"
import { Route, Routes } from "react-router-dom"
// import {Cast} from "./Cast/Cast"
import { Reviews } from "./Reviews/Reviews"
import { StyledNavLink, Navigate } from "./Layout"
import { NotFound } from "./NotFound/NotFound"
import { lazy } from "react"

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
// const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));
// const Review = lazy(() => import('./Review/Review'));
const Cast = lazy(() => import('./Cast/Cast'));
// const NotFound = lazy(() => import('./NotFound/NotFound'));



export const App = () => {



  return <>
    <header>
      <Navigate> 
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink> 
      </Navigate>

    </header>
       
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/movies" element={<MoviesPage/>} />
      <Route path="/movies/:movieId" element={<MovieDetailsPage/>}>
        <Route path="cast" element={<Cast/>} />
        <Route path="reviews" element={<Reviews/>} />
      </Route>
        <Route path="*" element={<NotFound/>} />
    </Routes>
  </>
}
