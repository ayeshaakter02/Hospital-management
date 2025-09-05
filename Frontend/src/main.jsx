// import { createContext, StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import { useState } from 'react';

// export const Context = createContext({isAuthenticated: false});

// const AppWrapper = ()=>{
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(false);

//   return(
//     <Context.Provider value={{isAuthenticated, setIsAuthenticated, user, setUser }}>
//         <App />
//     </Context.Provider>
//   )

// }

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//   <AppWrapper />
//   </StrictMode>,
// )



import { createContext, StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Firebase import
import { auth } from "./firebase.config"; // আপনার firebase.config.js থেকে import করবেন
import { onAuthStateChanged } from "firebase/auth";

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Firebase Authentication observer
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

    return () => unsubscribe(); // cleanup
  }, []);

  return (
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
