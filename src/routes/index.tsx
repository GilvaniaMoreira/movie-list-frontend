import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

// Lazy loading das páginas
const HomePage = React.lazy(() => import('../pages/Home'));
const LoginPage = React.lazy(() => import('../pages/Login'));
const RegisterPage = React.lazy(() => import('../pages/Register'));
const FavoritesPage = React.lazy(() => import('../pages/Favorites'));
const MovieDetailsPage = React.lazy(() => import('../pages/MovieDetails'));
const SharedListPage = React.lazy(() => import('../pages/SharedList'));

const AppRoutes: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/shared/:shareToken" element={<SharedListPage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        
        {/* Rotas protegidas */}
        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <FavoritesPage />
            </ProtectedRoute>
          }
        />
        
        {/* Rota padrão */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </React.Suspense>
  );
};

export default AppRoutes;
