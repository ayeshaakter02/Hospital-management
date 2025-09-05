// import axios from "axios";
// import React, { useState } from "react";
// import { toast } from "react-toastify";

// const MessageForm = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMesage] = useState("");

//   const handleMessage = async (e) => {
//     e.preventDefault();
//     try {
//       await axios
//         .post(
//           "http://localhost:4000/api/v1/message/send",
//           { firstName, lastName, phone, email, message },
//           {
//             withCredentials: true,
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         )
//         .then((res) => {
//           toast.success(res.data.message);
//           setFirstName("");
//           setLastName("");
//           setEmail("");
//           setPhone("");
//           setMesage("");
//         });
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };
//   return (
//     <div className="container form-component message-form">
//       <h2>Send Us A Message</h2>
//       <form onSubmit={handleMessage}>
//         <div>
//           <input
//             type="text"
//             placeholder="First Name"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//           />
//         </div>

//         <div>
//           <input
//             type="text"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Phone Number"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </div>

//         <textarea
//           rows={7}
//           placeholder="Message"
//           value={message}
//           onChange={(e) => setMesage(e.target.value)}
//         ></textarea>

//         <div style={{ justifyContent: "center", alignItems: "center" }}>
//           <button type="submit">Send</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default MessageForm;



import React, { useState } from "react";
import { toast } from "react-toastify";
import { ref, push } from "firebase/database";
import { db } from "../firebase.config";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMesage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();

    try {
      const messagesRef = ref(db, "messages"); // database node
      await push(messagesRef, {
        firstName,
        lastName,
        email,
        phone,
        message,
        createdAt: new Date().toISOString(),
      });

      toast.success("Message sent successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMesage("");
    } catch (error) {
      toast.error("Failed to send message");
      console.error(error);
    }
  };

  return (
    <div className="container form-component message-form">
      <h2>Send Us A Message</h2>
      <form onSubmit={handleMessage}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <textarea
          rows={7}
          placeholder="Message"
          value={message}
          onChange={(e) => setMesage(e.target.value)}
        ></textarea>

        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
