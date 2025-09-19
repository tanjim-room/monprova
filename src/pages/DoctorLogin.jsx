import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/monprova logo2.png';

const DoctorLogin = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/patient-dashboard');
    };

    const handleGoogleLogin = () => {
        // TODO: redirect to your Google OAuth endpoint
        window.location.href = '/auth/google';
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
                    ডাক্তার হিসেবে লগইন করুন
                </h2>

                {/* Google Login */}
                <button
                    onClick={handleGoogleLogin}
                    className="btn btn-outline btn-primary border-[#A159AD] text-[#A159AD] w-full mb-4 text-lg font-medium px-8 py-6 
                     hover:bg-[#A159AD] hover:text-white transition duration-300 ease-in-out"
                >
                    <img
                        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                        alt="Google"
                        className="w-5 h-5 mr-2"
                    />
                    Google দিয়ে লগইন করুন
                </button>

                <div className="divider">অথবা</div>

                {/* Email/Password Form */}
                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="text"
                        placeholder="ইমেইল"
                        className="input input-bordered w-full"
                        required
                    />
                    <input
                        type="password"
                        placeholder="পাসওয়ার্ড"
                        className="input input-bordered w-full"
                        required
                    />
                    <button
                        type="submit"
                        className="btn btn-neutral text-white bg-[#A159AD] w-full text-lg font-medium px-8 py-6 border-none
                       hover:bg-transparent hover:border hover:border-solid hover:border-[#A159AD] hover:text-[#A159AD]
                       transition duration-300 ease-in-out"
                    >
                        লগইন করুন
                    </button>
                </form>
                <div className="divider">অ্যাকাউন্ট নেই?</div>
                {/* Register Button */}
                <NavLink to="/doctorRegister">
                    <button className="btn btn-outline btn-primary border-[#A159AD] text-[#A159AD] w-full mt-4 text-lg font-medium px-8 py-6 
                             hover:bg-[#A159AD] hover:text-white transition duration-300 ease-in-out"
                    >
                        ডাক্তার রেজিস্ট্রেশন
                    </button>
                </NavLink>

                {/* Forgot Password */}
                <div className="text-center mt-4 text-sm">
                    <NavLink to="/forgot" className="link link-hover">
                        পাসওয়ার্ড ভুলে গেছেন?
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default DoctorLogin;