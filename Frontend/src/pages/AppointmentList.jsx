import { useEffect, useState } from "react";

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/appointments/${id}`, {
      method: "DELETE"
    });
    setAppointments(appointments.filter((appt) => appt._id !== id));
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Appointments List</h2>
      <ul className="space-y-3">
        {appointments.map((appt) => (
          <li
            key={appt._id}
            className="flex justify-between items-center border p-3 rounded"
          >
            <div>
              <p className="font-semibold">{appt.name}</p>
              <p className="text-sm text-gray-600">{appt.doctor}</p>
              <p className="text-xs text-gray-500">{appt.date} @ {appt.time}</p>
            </div>
            <button
              onClick={() => handleDelete(appt._id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default AppointmentList;
