import Home from 'pages/Home';
import Movies from 'pages/Movies';
import { Routes, Route, Navigate } from 'react-router-dom';
import CastList from './CastList';
import Layout from './Layout';
import MovieDetails from './MovieDetails';
import ReviewList from './ReviewList';

document.title = 'HW-5 Movies';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<CastList />} />
          <Route path="/movies/:movieId/reviews" element={<ReviewList />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
