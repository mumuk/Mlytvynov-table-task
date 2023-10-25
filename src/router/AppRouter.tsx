import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import GuestRoute from "./GuestRoute.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import HomePage from "../pages/HomePage.tsx";


const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<GuestRoute><LoginPage /></GuestRoute>} />
        <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;