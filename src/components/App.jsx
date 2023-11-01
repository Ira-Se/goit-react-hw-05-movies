import HomePage from "pages/HomePage"
import MoviesPage from "pages/MoviesPage"
import { NavLink, Route, Routes } from "react-router-dom"

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
      <Route path="/movies/:movieId" element={<div>MovieDetails</div>}>
        <Route path="/movies/:movieId/cast" element={<div>Cast</div>} />
        <Route path="/movies/:movieId/reviews" element={<div>Reviews</div>} />
     </Route>
    </Routes>
  </>
}
