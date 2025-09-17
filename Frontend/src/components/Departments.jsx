import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentsArray = [
    {
      name: "Pediatrics",
      doctor1: "Dr. Smita",
      doctor2: "Dr. Aman",
      imageUrl: "/departments/pedia.jpg",
    },
    {
      name: "Orthopedics",
      doctor1: "Dr. Tamanna",
      doctor2: "Dr. Nazmul",
      imageUrl: "/departments/ortho.jpg",
    },
    {
      name: "Cardiology",
      doctor1: "Dr. Alisha",
      doctor2: "Dr. Rayaan",
      imageUrl: "/departments/cardio.jpg",
    },
    {
      name: "Neurology",
      doctor1: "Dr. Hafsa",
      doctor2: "Dr. Rayaan",
      imageUrl: "/departments/neuro.jpg",
    },
    {
      name: "Oncology",
      doctor1: "Dr. Tuni",
      doctor2: "Dr. Rifat",
      imageUrl: "/departments/onco.jpg",
    },
    {
      name: "Radiology",
      doctor1: "Dr. Rina",
      doctor2: "Dr. Parveez",
      imageUrl: "/departments/radio.jpg",
    },
    {
      name: "Physical Therapy",
      doctor1: "Dr. Sheuly",
      doctor2: "Dr. Mamun",
      imageUrl: "/departments/therapy.jpg",
    },
    {
      name: "Dermatology",
      doctor1: "Dr. Alisha",
      doctor2: "Dr. Ayan",
      imageUrl: "/departments/derma.jpg",
    },
    {
      name: "ENT",
      doctor1: "Dr. Reshma",
      doctor2: "Dr. Abir",
      imageUrl: "/departments/ent.jpg",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1,
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1,
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1,
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="container departments">
      <h2>Departments</h2>
      <Carousel responsive={responsive}>
        {departmentsArray.map((depart, index) => {
          return (
            <div className="card" key={index}>
              <div className="depart-name">{depart.name}</div>
              <div>
                <div className="depart-doc">{depart.doctor1}</div>
                <div className="depart-doc">{depart.doctor2}</div>
              </div>
              <img src={depart.imageUrl} alt={depart.name} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Departments;
