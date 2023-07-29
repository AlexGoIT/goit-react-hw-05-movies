import Home from 'pages/Home';
import Movies from 'pages/Movies/Movies';
import { Routes, Route } from 'react-router-dom';
import Cast from './Cast';
import Layout from './Layout';
import MovieDetails from './MovieDetails';
import Reviews from './Reviews';

document.title = 'HW-5 Movies';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}
