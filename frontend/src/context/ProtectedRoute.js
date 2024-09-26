import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    console.log(isAuthenticated)
    if (!isAuthenticated) {
      // Redirect to login if user is not authenticated
      return <Navigate to="/login" />;
    }
  
    // If authenticated, render the protected component
    return children;
  };
  
  export default ProtectedRoute;
