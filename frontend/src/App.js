import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Register from './components/Register';
import Login from './components/Login';
import YourVideoComponent from './components/YourVideoComponent';
import ProtectedRoute from './context/ProtectedRoute';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
import Homepage from './components/Homepage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addvideo" element={<AddVideo />} />
          <Route path="/viewvideos" element={<VideoList />} />
          {/* Protect the /videos route using ProtectedRoute */}
          <Route 
            path="/videos" 
            element={
              <ProtectedRoute>
                <YourVideoComponent />
              </ProtectedRoute>
            } 
          />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
