import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { ref, push } from "firebase/database";
import { db } from "../firebase.config";

const AppointmentForm = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [nid, setNID] = useState("");
  // const [dob, setDob] = useState("");
  // const [gender, setGender] = useState("");
  // const [appointmentDate, setAppointmentDate] = useState("");
  // const [department, setDepartment] = useState("Pediatrics");
  // const [doctorName, setDoctorName] = useState("");
  // const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];
  const doctorArray = [
    "Dr. Abul Kalam",
    "Dr. Tamanna Akter",
    "Dr. Smita",
    "Dr. Ayesha ",
    "Dr. Abdul Razzak",
    "Dr. Rina Khan",
    "Dr. Parvezz",
    "Dr. Dananeer",
    "Dr. Hafsa",
  ];

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nid: "",
    dob: "",
    gender: "",
    appointmentDate: "",
    department: "",
    doctorName: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAppointment = (e) => {
    e.preventDefault();
    push(ref(db, "appointments/"), {
    firstName: form.firstName || "",
    lastName: form.lastName || "",
    email: form.email || "",
    phone: form.phone || "",
    nid: form.nid || "",
    dob: form.dob || "",
    gender: form.gender || "",
    appointmentDate: form.appointmentDate || "",
    department: form.department || "",
    doctorName: form.doctorName || "",
    address: form.address || "",
  })
      .then(() => {
        alert("Appointment submitted!");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          nid: "",
          dob: "",
          gender: "",
          appointmentDate: "",
          department: "",
          doctorName: "",
          address: "",
        });
      })
      .catch((err) => console.error(err));
  };

  // const handleAppointment = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const hasVisitedBool = Boolean(hasVisited);
  //     const { data } = await axios.post(
  //       "http://localhost:4000/api/v1/appointment/post",
  //       {
  //         firstName,
  //         lastName,
  //         email,
  //         phone,
  //         nid,
  //         dob,
  //         gender,
  //         appointment_date: appointmentDate,
  //         department,
  //         doctorName,
  //         hasVisited: hasVisitedBool,
  //         address,
  //       },
  //       {
  //         withCredentials: true,
  //         headers: { "Content-Type": "application/json" },
  //       }
  //     );
  //     toast.success(data.message);
  //     setFirstName(""),
  //       setLastName(""),
  //       setEmail(""),
  //       setPhone(""),
  //       setNID(""),
  //       setDob(""),
  //       setGender(""),
  //       setAppointmentDate(""),
  //       setDepartment(""),
  //       setDoctorName(""),
  //       setHasVisited(""),
  //       setAddress("");
  //   } catch (error) {
  //     toast.error(error.response.data.message);
  //   }
  // };

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
              type="number"
              name="nid"
              placeholder="NID Number"
              value={form.nid}
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
            <select name="department" value={form.department} onChange={handleChange}>
              {departmentsArray.map((depart, index) => {
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
