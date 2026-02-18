import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import PrivateRoute from './components/common/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;