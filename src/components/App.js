import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Layout from './Layout';
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MovieDetails from './MovieDetails';
import CastList from './CastList';
import ReviewList from './ReviewList';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../components/MovieDetails'));

document.title = 'HW-5 Movies';

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
}
