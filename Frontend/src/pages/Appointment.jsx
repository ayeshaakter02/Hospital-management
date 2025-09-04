import React from "react";
import AppointmentForm from "../components/AppointmentForm";
import Hero from "../components/Hero";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Get the Best Care Possible: Book an Appointment at Life Care Hospital"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm />
    </>
  );
};

export default Appointment;

// import React, { useState } from "react";
// import { ref, push } from "firebase/database";
// import { db } from "../firebase.config";
// import Hero from "../components/Hero";

// const Appointment = () => {
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     nid: "",
//     date: "",
//     gender: "",
//     issue: "",
//     doctor: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     push(ref(db, "appointments/"), form)
//       .then(() => {
//         alert("Appointment submitted!");
//         setForm({
//           firstName: "",
//           lastName: "",
//           email: "",
//           phone: "",
//           nid: "",
//           date: "",
//           gender: "",
//           issue: "",
//           doctor: "",
//         });
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <>
//       <Hero
//         title={
//           "Get the Best Care Possible: Book an Appointment at Life Care Hospital"
//         }
//         imageUrl={"/signin.png"}
//       />
//       <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
//         <h2 className="text-2xl font-bold mb-4">Book Appointment</h2>
//         <form onSubmit={handleSubmit} className="grid gap-3">
//           <input
//             className="border p-2 rounded"
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={form.firstName}
//             onChange={handleChange}
//           />
//           <input
//             className="border p-2 rounded"
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={form.lastName}
//             onChange={handleChange}
//           />
//           <input
//             className="border p-2 rounded"
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//           />
//           <input
//             className="border p-2 rounded"
//             type="text"
//             name="phone"
//             placeholder="Phone"
//             value={form.phone}
//             onChange={handleChange}
//           />
//           <input
//             className="border p-2 rounded"
//             type="text"
//             name="nid"
//             placeholder="NID"
//             value={form.nid}
//             onChange={handleChange}
//           />
//           <input
//             className="border p-2 rounded"
//             type="date"
//             name="date"
//             value={form.date}
//             onChange={handleChange}
//           />
//           <select
//             className="border p-2 rounded"
//             name="gender"
//             value={form.gender}
//             onChange={handleChange}
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//           <input
//             className="border p-2 rounded"
//             type="text"
//             name="issue"
//             placeholder="Health Issue"
//             value={form.issue}
//             onChange={handleChange}
//           />
//           <input
//             className="border p-2 rounded"
//             type="text"
//             name="doctor"
//             placeholder="Doctor Name"
//             value={form.doctor}
//             onChange={handleChange}
//           />
//           <button
//             type="submit"
//             className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Appointment;
