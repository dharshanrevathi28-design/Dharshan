import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AppointmentProvider } from './context/AppointmentContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import DoctorProfile from './pages/DoctorProfile';
import AdminDashboard from './pages/AdminDashboard';
import './styles/main.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppointmentProvider>
          <div className="app-container">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/doctors/:id" element={<DoctorProfile />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
            
            <footer style={{ marginTop: 'auto', borderTop: '1px solid var(--border-color)', padding: '2rem', textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
              <p>© 2026 Book-a-Doctor Platform. All rights reserved. Connecting Patients & Medical Specialists worldwide.</p>
            </footer>
          </div>
        </AppointmentProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
