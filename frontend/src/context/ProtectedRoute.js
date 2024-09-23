import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from './AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);
  
    if (!isAuthenticated) {
      // Redirect to login if user is not authenticated
      return <Navigate to="/login" />;
    }
  
    // If authenticated, render the protected component
    return children;
  };
  
  export default ProtectedRoute;
