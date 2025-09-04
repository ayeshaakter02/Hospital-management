import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MyList from "../components/MyList";
import Navbar from "../components/Navbar";
import List from "../components/List";

const AppointmentList = () => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <List />
        </div>
      </div>
    </>
  );
};

export default AppointmentList;
