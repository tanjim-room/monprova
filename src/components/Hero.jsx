import React from 'react';
import logo from '../assets/monprova logo2.png'
import img1 from '../assets/Stress-amico.png'
import img2 from '../assets/Stress-pana.png'
import img3 from '../assets/Worried-amico.png'
import img4 from '../assets/Worried-rafiki.png'

import { NavLink } from "react-router-dom";

const Hero = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex justify-center items-center gap-8 px-10'>
                <div className='w-1/2'>
                    <div className="carousel w-full h-[500px]">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img
                                src={img1}
                                className="w-full object-contain" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img
                                src={img2}
                                className="w-full object-contain" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img
                                src={img3}
                                className="w-full object-contain" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img
                                src={img4}
                                className="w-full object-contain" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='py-8 flex items-center gap-4'>
                        <img src={logo} alt="" className='w-16 h-16' />
                        <h2 className='text-5xl font-semibold text-gray-700 py-2'>মনপ্রভা</h2>
                    </div>
                    <h2 className='text-5xl font-bold text-[#A159AD] py-2'>
                        মানসিক স্বাস্থ্য সেবা এখন
                    </h2>
                    <h2 className='text-5xl font-bold  text-[#A159AD] py-2 '>
                        আপনার হাতের মুঠোয়
                    </h2>
                    <p className='text-xl py-1'>অভিজ্ঞ ডাক্তারদের সাথে সরাসরি যোগাযোগ করুন এবং উন্নত স্বাস্থ্য সেবা পান।</p>
                    <p className='text-xl py-1 mb-4'>যেকোনো সময়, যেকোনো জায়গা থেকে।</p>


                    <button className="btn btn-neutral text-white bg-[#A159AD] mt-4 mr-4 text-lg font-medium border-none px-8 py-6
                    hover:bg-transparent hover:border-1 hover:border-solid hover:border-[#A159AD] hover:text-[#A159AD] transition duration-300 ease-in-out
                   ">
                        <NavLink to="/patientLogin">
                            রোগী হিসেবে প্রবেশ করুন
                        </NavLink>
                    </button>

                    <button className="btn btn-neutral text-white bg-[#A159AD] mt-4 mr-4 text-lg font-medium border-none px-8 py-6
                    hover:bg-transparent hover:border-1 hover:border-solid hover:border-[#A159AD] hover:text-[#A159AD] transition duration-300 ease-in-out
                   ">
                        <NavLink to="/doctorLogin">
                            ডাক্তার হিসেবে প্রবেশ করুন
                        </NavLink>
                    </button>

                </div>
            </div>
        </div>

    );
};

export default Hero;