// import HomePage from "pages/HomePage/HomePage"
// import MovieDetailsPage from "pages/MovieDetailsPage/MovieDetailsPage"
// import MoviesPage from "pages/MoviesPage"
import { Route, Routes } from "react-router-dom"
// import {Cast} from "./Cast/Cast"
// import { Reviews } from "./Reviews/Reviews"

// import { NotFound } from "./NotFound/NotFound"
import { lazy } from "react"
import { Layout } from './Layout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));
const NotFoundPage = lazy(() => import('./NotFound/NotFoundPage'));



export const App = () => {



  return<Routes>
    <Route path="/" element={<Layout />}>
      <Route index path="/" element={<HomePage/>} />
      <Route path="/movies" element={<MoviesPage/>} />
      <Route path="/movies/:movieId" element={<MovieDetailsPage/>}>
        <Route path="cast" element={<Cast/>} />
        <Route path="reviews" element={<Reviews/>} />
      </Route></Route>
     <Route path="*" element={<NotFoundPage/>} />
    </Routes>
 }
