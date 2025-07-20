import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createStudent } from "../features/studentSlice";

const CreateInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !website || !username) {
      alert("Please fill out all fields");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name,
      email: email,
      phone: parseFloat(phone),
      username,
      website,
    };

    dispatch(createStudent(newStudent));
    alert("student created Successfully");

    setName("");
    setEmail("");
    setPhone("");
    setWebsite("");
    setUsername("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 px-4"
      >
        <input
          required
          minLength={5}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="student Name"
          className="px-4 py-2 border border-green-300 rounded-lg"
        />
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          className="px-4 py-2 border border-green-300 rounded-lg"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          className="px-4 py-2 border border-green-300 rounded-lg"
          required
          pattern="\d{10}"
          title="Phone number must be exactly 10 digits"
        />
        <input
          type="text"
          minLength={5}
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="Website"
          className="px-4 py-2 border border-green-300 rounded-lg"
          required
        />
        <input
          type="text"
          minLength={5}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="px-4 py-2 border border-green-300 rounded-lg lg:col-span-2"
          required
        />
        <button
          type="submit"
          className="col-span-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Create student
        </button>
      </form>
    </>
  );
};

export default CreateInputs;
