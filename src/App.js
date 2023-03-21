import logo from './logo.svg';
import './App.css';
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Footer from './Components/Footer';
import HomePage from "./Components/HomePage";
import Reservations from "./Components/Reservations";
import BookingConfirmation from "./Components/BookingConfirmation"

function App() {

  const [form, setForm] = useState({
    name: "",
    guests: 1,
    date: "",
    time: "",
    phone: "",
    disabled: "",
  });
  const navigate = useNavigate();

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }))
    console.log(form);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    navigate("/Booking-confirmed");
  };

  return (
    <>
      <div>
        <Nav></Nav>
        <Footer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reservation" element={< Reservations
            form={form}
            setForm={setForm}
            onChange={onChange}
            onSubmit={onSubmit} />} />
          <Route path="/Booking-confirmed" element={<BookingConfirmation />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
