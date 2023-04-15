import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const Product = lazy(() => import('../pages/Product/Product'));

export const AppRoutes = () => {
  

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </Suspense>
  );
};
