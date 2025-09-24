import React, { useContext, useState } from "react";
import { Context } from "../main";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );

  //     toast.success("Login Successful!");               
  //     setIsAuthenticated(true);
  //     navigateTo("/");
  //   } catch (error) {
  //     toast.error(error.message);
  //     console.error(error);
  //   }
  // };

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const loggedInUser = userCredential.user;

    toast.success("Login Successful!");
    setIsAuthenticated(true);
    setUser(loggedInUser);
    navigateTo("/");
  } catch (error) {
    toast.error(error.message);
    console.error(error);
  }
};

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="container form-component login-form">
      <h2>Login</h2>
      <p>Please Login to Continue</p>
      <p>
        Welcome to Life Care. Please manage appointments and stay
        connected with your healthcare provider. Your privacy and security are
        our top priorities. If you experience any issues, please contact our
        support team for assistance.
      </p>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />

        <div
          style={{
            gap: "10px",
            justifyContent: "flex-end",
            flexDirection: "row",
          }}
        >
          <p style={{ marginBottom: 0 }}>Not Registered?</p>
          <Link
            to={"/register"}
            style={{ textDecoration: "none", alignItems: "center" }}
          >
            Register Now
          </Link>
        </div>
        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
