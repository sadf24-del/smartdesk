import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import ClientPage from './Pages/ClientPage';
import ProjectPage from './Pages/ProjectPage';
import DashboardPage from './Pages/DashboardPage';
import UnderMaintenance from './Pages/UnderMaintenance';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/clients" element={<ClientPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/under-maintenance" element={<UnderMaintenance />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
