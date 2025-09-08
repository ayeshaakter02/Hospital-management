import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import Appointment from "./pages/Appointment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import firebaseConfig from "./firebase.config.js";
import AppointmentList from "./pages/AppointmentList.jsx";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        {/* <Route
          path="/doctor"
          element={
            <div className="pt-24">
              <AboutUs />
            </div>
          }
        /> */}
        <Route
          path="/about"
          element={
            <div className="pt-24">
              <AboutUs />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className="pt-24">
              <Login />
            </div>
          }
        />
        <Route
          path="/register"
          element={
            <div className="pt-24">
              <Register />
            </div>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <div className="pt-24">
                <Home />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/appointment"
          element={
            <ProtectedRoute>
              <div className="pt-24">
                <Appointment />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/appointment-list"
          element={
            <ProtectedRoute>
              <div className="pt-24">
                <AppointmentList />
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
      <ToastContainer position="top-center" />
    </Router>
  );
}

export default App;
