// import React, { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Context } from "../main";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { AiOutlineClose } from "react-icons/ai";
// import { GiHamburgerMenu } from "react-icons/gi";

// const Navbar = () => {
//   const [show, setShow] = useState(true);
//   const { isAuthenticated, setIsAuthenticated } = useContext(Context);
//   const navigateTo = useNavigate();

//   const handleLogout = async () => {
//     await axios
//       .get("http://localhost:4000/api/v1/user/patient/logout", {
//         withCredentials: true,
//       })
//       .then((res) => {
//         toast.success(res.data.message);
//         setIsAuthenticated(false);
//       })
//       .catch((err) => {
//         toast.error(err.response.data.message);
//       });
//   };

//   const gotoLogin = async () => {
//     navigateTo("/login");
//     setShow(!show);
//   };

//   return (
//     <>
//       <nav className="container">
//         <div className="logo">
//           {" "}
//           <img
//             src="/logo.png"
//             alt="logo"
//             className="logo-img"
//             onClick={() => navigateTo("/")}
//           />
//         </div>
//         <div className={show ? "navLinks showmenu" : "navLinks"}>
//           <div className="links">
//             <Link to={"/"} onClick={() => setShow(!show)}>
//               Home{" "}
//             </Link>
//             <Link to={"/appointment"} onClick={() => setShow(!show)}>
//               Appointment{" "}
//             </Link>
//             <Link to={"/about"} onClick={() => setShow(!show)}>
//               About Us{" "}
//             </Link>
//             <Link
//               className="px-4 py-2 bg-green-500 text-white rounded-lg"
//               to="/appointment-list"
//             >
//               View Appointments
//             </Link>
//           </div>
//           {isAuthenticated ? (
//             <button className="logoutBtn btn" onClick={handleLogout}>
//               Logout
//             </button>
//           ) : (
//             <button className="logoutBtn btn" onClick={gotoLogin}>
//               Login
//             </button>
//           )}
//         </div>
//         <div className="hamburger" onClick={() => setShow(!show)}>
//           {show ? <GiHamburgerMenu /> : <AiOutlineClose />}
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../main";
import { toast } from "react-toastify";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  // 🔹 Firebase Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!");
      setIsAuthenticated(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const gotoLogin = () => {
    navigateTo("/login");
    setShow(!show);
  };

  return (
    <>
      <nav className="container">
        <div className="logo">
          <img
            src="/logo.png"
            alt="logo"
            className="logo-img"
            onClick={() => navigateTo("/")}
          />
        </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            <Link to={"/"} onClick={() => setShow(!show)}>
              Home
            </Link>
            <Link to={"/appointment"} onClick={() => setShow(!show)}>
              Appointment
            </Link>
            <Link to={"/about"} onClick={() => setShow(!show)}>
              About Us
            </Link>
            <Link
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
              to="/appointment-list"
              onClick={() => setShow(!show)}
            >
              View Appointments
            </Link>
          </div>
          {isAuthenticated ? (
            <button className="logoutBtn btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="logoutBtn btn" onClick={gotoLogin}>
              Login
            </button>
          )}
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          {show ? <GiHamburgerMenu /> : <AiOutlineClose />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
