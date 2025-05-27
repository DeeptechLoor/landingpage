import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from '@/layouts/MainLayout';

// Pages
import HomePage from '@/pages/HomePage';
import ProjectsPage from '@/pages/ProjectsPage';
import ProjectDetailPage from '@/pages/ProjectDetailPage';
import AboutPage from '@/pages/AboutPage';
import InvestorDashboardPage from '@/pages/InvestorDashboardPage';
import StartupDashboardPage from '@/pages/StartupDashboardPage.jsx';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import NotFoundPage from '@/pages/NotFoundPage.jsx';

// Context
import { AuthProvider } from '@/contexts/AuthContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="projetos" element={<ProjectsPage />} />
              <Route path="projetos/:id" element={<ProjectDetailPage />} />
              <Route path="sobre" element={<AboutPage />} />
              <Route path="investidor" element={<InvestorDashboardPage />} />
              <Route path="startup" element={<StartupDashboardPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="cadastro" element={<RegisterPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;