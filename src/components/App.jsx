import HomePage from "pages/HomePage"
import MovieDetailsPage from "pages/MovieDetailsPage"
import MoviesPage from "pages/MoviesPage"
import { NavLink, Route, Routes } from "react-router-dom"
import {Cast} from "./Cast/Cast"
import { Reviews } from "./Reviews/Reviews"


export const App = () => {



  return <>
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        {/* <NavLink to="/movies/:movieId">MovieDetails</NavLink>
        <NavLink to="/movies/:movieId/cast">Cast</NavLink>
        <NavLink to="/movies/:movieId/reviews">Reviews</NavLink> */}

      </nav>

    </header>
    І з цим я теж впораюся
    
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/movies" element={<MoviesPage/>} />
      <Route path="/movies/:movieId" element={<MovieDetailsPage/>}>
        <Route path="cast" element={<Cast/>} />
        <Route path="reviews" element={<Reviews/>} />
     </Route>
    </Routes>
  </>
}
