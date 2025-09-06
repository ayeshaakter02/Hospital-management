import { createContext, StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Firebase import
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.config.js";

// export const Context = createContext({ isAuthenticated: false });
export const Context = createContext({
  isAuthenticated: false,
  user: null,
});

const AppWrapper = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [user, setUser] = useState(null);
   const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setIsAuthenticated(true);
        setUser(currentUser);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    });

    return () => unsubscribe(); 
  }, []);

  return (
    // <Context.Provider
    //   value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
    // >
    //   <App />
    // </Context.Provider>
    <Context.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
    >
      <App />
    </Context.Provider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
