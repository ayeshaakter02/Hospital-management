import React, { useEffect, useState } from "react";
import { ref, onValue, remove } from "firebase/database";
import { db } from "../firebase.config";

const List = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const appointmentsRef = ref(db, "appointments/");
    onValue(appointmentsRef, (snapshot) => {
      let data = [];
      snapshot.forEach((child) => {
        data.push({ id: child.key, ...child.val() });
      });
      setAppointments(data);
    });
  }, []);

  const handleDelete = (id) => {
    remove(ref(db, "appointments/" + id));
  };

  return (
    <div
      style={{
        margin: "40px auto",
        padding: "24px",
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{marginBottom: "16px"}}>Appointment List</h2>
      <table className="list-table" style={{marginBottom: "16px", width: "100%", borderCollapse: "collapse"}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Appointment Date</th>
            <th>Department</th>
            <th>Doctor Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a) => (
            <tr key={a.id}>
              <td>
                {a.firstName} {a.lastName}
              </td>
              <td>{a.email}</td>
              <td>{a.phone}</td>
              <td>{a.appointmentDate}</td>
              <td>{a.department}</td>
              <td>{a.doctorName}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(a.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {appointments.length === 0 && (
            <tr>
              <td colSpan="7" className="no-data">
                No appointments found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;
