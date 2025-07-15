// Admin/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAdmin') === 'true';
  return isAuthenticated ? children : <Navigate to="/hidden-Soul" />;
};

export default ProtectedRoute;
