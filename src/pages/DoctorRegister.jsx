import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/monprova logo2.png';

const DoctorRegister = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name   : '',
    email  : '',
    password       : '',
    confirmPassword: '',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('পাসওয়ার্ড মিলছে না!');
      return;
    }
    // TODO: send data to backend
    navigate('/patient-dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card w-full max-w-md shadow-lg bg-base-100 p-8">
        {/* Brand */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <img src={logo} alt="logo" className="w-16 h-16" />
          <h2 className="text-4xl font-semibold text-gray-700">মনপ্রভা</h2>
        </div>

        <h2 className="text-2xl font-semibold text-[#A159AD] text-center mb-6">
          ডাক্তার রেজিস্ট্রেশন
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="পুরো নাম দিন"
            className="input input-bordered w-full"
            required
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="ইমেইল দিন"
            className="input input-bordered w-full"
            required
          />
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
            placeholder="পাসওয়ার্ড দিন"
            className="input input-bordered w-full"
            required
          />
          <input
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            type="password"
            placeholder="পুনরায় পাসওয়ার্ড দিন"
            className="input input-bordered w-full"
            required
          />

          <button
            type="submit"
            className="btn btn-neutral text-white bg-[#A159AD] w-full text-lg font-medium px-8 py-6 border-none
                       hover:bg-transparent hover:border hover:border-solid hover:border-[#A159AD] hover:text-[#A159AD]
                       transition duration-300 ease-in-out"
          >
            রেজিস্ট্রেশন সম্পন্ন করুন
          </button>
        </form>

        <div className="text-center mt-4 text-sm">
          ইতিমধ্যে অ্যাকাউন্ট আছে?{' '}
          <NavLink to="/doctorLogin" className="link link-primary">
            লগইন করুন
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DoctorRegister;