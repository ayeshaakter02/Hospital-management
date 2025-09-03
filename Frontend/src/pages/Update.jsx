import React from "react";
import Hero from "../components/Hero";
import MyList from "../components/MyList";

const Update = () => {
  return (
    <>
      <Hero
        title={
          "Get the Best Care Possible: Book an Appointment at Life Care Hospital"
        }
        imageUrl={"/signin.png"}
      />
      <MyList />
    </>
  );
};

export default Update;
