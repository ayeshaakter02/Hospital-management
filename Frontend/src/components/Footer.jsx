import React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer className="container">
        <hr />
        <div className="content">
          <div>
            <img src="/logo.png" alt="logo" className="logo-img" />
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About Us</Link>
            </ul>
          </div>
          <div>
            <h4>Developed by</h4>
            <p>Group</p>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/ar.badhon.71"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://github.com/ayeshaakter02"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/ar.badhon.71/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare />
              </a>
            </div>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>01787438107</span>
            </div>
            <div>
              <MdEmail />
              <span>lifecare@gmail.com</span>
            </div>
            <div>
            <FaLocationDot/>
            <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
        <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Life Care Hospital</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
