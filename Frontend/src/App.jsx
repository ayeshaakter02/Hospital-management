import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import Appointment from "./pages/Appointment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import { Context } from "./main";
import axios from "axios";
import Loading from "./components/loading";
import Footer from "./components/Footer";
import MyList from "./components/MyList";
import List from "./components/List";
import firebaseConfig from './firebase.config.js';
import AppointmentList from "./pages/AppointmentList.jsx";
import Update from "./pages/Update.jsx";

const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/list" element={<List />} />
          <Route path="/my-list/:id" element={<MyList />} />
        </Routes> */}
        <Routes>
  <Route path="/" element={<div className="pt-24"><Home /></div>} />
  <Route path="/appointment" element={<div className="pt-24"><Appointment /></div>} />
  <Route path="/about" element={<div className="pt-24"><AboutUs /></div>} />
  <Route path="/register" element={<div className="pt-24"><Register /></div>} />
  <Route path="/login" element={<div className="pt-24"><Login /></div>} />
  {/* <Route path="/list" element={<div className="pt-24"><AppointmentList /></div>} />
  <Route path="/update/:id" element={<div className="pt-24"><Update /></div>} /> */}
</Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;

// // "mongodb+srv://Hospital:H0$p!t@l@cluster0.fvc3cgi.mongodb.net/Hospital?retryWrites=true&w=majority&appName=Cluster0"
