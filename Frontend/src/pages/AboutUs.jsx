import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | Life Care Hospital "}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"}/>
    </>
  );
};

export default AboutUs;
