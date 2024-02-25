import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Container from './Components/Container/Container';

const HomePage = lazy(() => import('../src/Pages/Home/Home'));
const Catalog = lazy(() => import('../src/Pages/Catalog/Catalog'));
const Favorites = lazy(() => import('../src/Pages/Favorites/Favorites'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}