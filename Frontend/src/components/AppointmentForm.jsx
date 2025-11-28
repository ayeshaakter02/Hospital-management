import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { ref, push } from "firebase/database";
import { db } from "../firebase.config";
import { Context } from "../main";
import { useContext } from "react";

const AppointmentForm = () => {
  const [hasVisited, setHasVisited] = useState(false);
  const { user } = useContext(Context);

  const timeslotArray = [
    "9:00 (AM) - 12:00 (PM)",
    "12:30 (PM) - 03:00 (PM)",
    "03:00 (PM) - 06:00 (PM)",
    "06:00 (PM) - 09:00 (PM)",
  ];
  
  const doctorArray = [
    "Pediatrics -> Dr. Smita",
    "Pediatrics -> Dr. Aman",
    "Orthopedics -> Dr. Tamanna",
    "Orthopedics -> Dr. Nazmul",
    "Cardiology -> Dr. Alisha",
    "Cardiology -> Dr. Rayhan",
    "Neurology -> Dr. Hafsa",
    "Neurology -> Dr. Rayaan",
    "Oncology -> Dr. Tuni",
    "Oncology -> Dr. Rifat",
    "Radiology -> Dr. Rina",
    "Radiology -> Dr. Parvezz",
    "Physical Therapy -> Dr. Sheuly",
    "Physical Therapy -> Dr. Mamun",
    "Dermatology -> Dr. Ayan",
    "Dermatology -> Dr. Anayaa",
    "ENT -> Dr. Reshma",
    "ENT -> Dr. Abir",
  ];

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    visitfee: "Visit-fee: 500",
    dob: "",
    gender: "",
    appointmentDate: "",
    timeslot: "",
    doctorName: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAppointment = (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login first!");
      return;
    }

    push(ref(db, "appointments/"), {
      firstName: form.firstName || "",
      lastName: form.lastName || "",
      email: form.email || "",
      phone: form.phone || "",
      vistfee: form.visitfee || "",
      dob: form.dob || "",
      gender: form.gender || "",
      appointmentDate: form.appointmentDate || "",
      timeslot: form.timeslot || "",
      doctorName: form.doctorName || "",
      address: form.address || "",
      userEmail: user.email, 
    })
      .then(() => {
        toast.success("Appointment submitted!");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          visitfee: "visit-fee: 500",
          dob: "",
          gender: "",
          appointmentDate: "",
          timeslot: "",
          doctorName: "",
          address: "",
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="container form-component appointment-form">
        <h2>Appointment</h2>
        <form onSubmit={handleAppointment}>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            <input
              type="number"
              name="phone"
              placeholder="Mobile"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div>
              <input
              type=""
              name="visitfee"
              placeholder="Visit fee"
              value={form.visitfee}
              onChange={handleChange}
            />
            <input
              type="date"
              name="dob"
              placeholder="Date of Birth"
              value={form.dob}
              onChange={handleChange}
            />
          </div>
          <div>
            <select name="gender" value={form.gender} onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            <input
              type="date"
              name="appointmentDate"
              placeholder="Appointment Date"
              value={form.appointmentDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <select name="timeslot" value={form.timeslot} onChange={handleChange}>
              {timeslotArray.map((depart, index) => {
                return (
                  <option value={depart} key={index}>
                    {depart}
                  </option>
                );
              })}
            </select>

            <select name="doctorName" value={form.doctorName} onChange={handleChange}>
              {doctorArray.map((depart, index) => {
                return (
                  <option value={depart} key={index}>
                    {depart}
                  </option>
                );
              })}
            </select>
          </div>
          <textarea
            rows="10"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address"
          />
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p>Have you visited before?</p>
            <input
              type="checkbox"
              checked={hasVisited}
              onChange={(e) => setHasVisited(e.target.checked)}
              style={{ flex: "none", width: "25px" }}
            />
          </div>
          <button type="submit">Get Appointment</button>
        </form>
      </div>
    </>
  );
};

export default AppointmentForm;
