import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import NotFoundPage from 'pages/NotFoundPage';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { Navigate } from 'react-router-dom';

export const App = () => {
  const ContactsPage = lazy(() => import('pages/ContactsPage'));
  const RegisterPage = lazy(() => import('pages/RegisterPage'));
  const LoginPage = lazy(() => import('pages/LoginPage'));

  return (
    <>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute redirectTo="/login" />}>
          <Route path="/contacts" element={<Layout />}>
            <Route index element={<ContactsPage />} />
          </Route>
        </Route>

        <Route path="/" element={<Navigate to="/contacts" />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};


