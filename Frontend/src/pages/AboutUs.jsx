import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Navbar from "../components/Navbar";
import Review from "../components/Review";

const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | Life Care Hospital "}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"}/>
      <Review/>
    </>
  );
};

export default AboutUs;
