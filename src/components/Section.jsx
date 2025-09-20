import React from 'react';
import { CgGames, CgProfile } from 'react-icons/cg';
import { FaClipboardList } from 'react-icons/fa';
import { LuBrain } from 'react-icons/lu';
import { RiCalendarScheduleFill } from 'react-icons/ri';
import { NavLink, Link } from 'react-router-dom';

const Section = () => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-4 p-4 justify-items-center'>
                <div className=' col-span-1 p-4'>

                    <div className="card bg-base-100 w-96 shadow-sm border-2 border-[#A159AD]">
                        <figure className="px-10 pt-10">
                            <p className='text-7xl text-[#A159AD]'><RiCalendarScheduleFill /></p>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl text-gray-800">অ্যাপয়েন্টমেন্ট</h2>
                            {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
                            <div className="card-actions py-2">
                                <button className="btn text-white px-12 bg-[#A159AD]  w-100%">
                                   
                                    <Link to="appoinments"> অ্যাপয়েন্টমেন্ট দেখুন</Link>
                                    </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=' col-span-1 p-4'>

                    <div className="card bg-base-100 w-96 shadow-sm border-2 border-[#A159AD]">
                        <figure className="px-10 pt-10">
                            <p className='text-7xl text-[#A159AD]'><LuBrain /></p>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl text-gray-800">অ্যাসেসমেন্ট</h2>
                            {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
                            <div className="card-actions py-2">
                                <button className="btn text-white px-12 bg-[#A159AD]  w-100%">
                                    <Link to="assessments">অ্যাসেসমেন্ট নিন</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=' col-span-1 p-4'>

                    <div className="card bg-base-100 w-96 shadow-sm border-2 border-[#A159AD]">
                        <figure className="px-10 pt-10">
                            <p className='text-7xl text-[#A159AD]'><FaClipboardList /></p>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl text-gray-800">ডাক্তারদের তালিকা</h2>
                            {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
                            <div className="card-actions py-2">
                                <button className="btn text-white px-12 bg-[#A159AD]  w-100%">
                                    <Link to="doctorList">
                                    ডাক্তারদের তালিকা দেখুন
                                    </Link>
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col-span-1 p-4'>

                    <div className="card bg-base-100 w-96 shadow-sm border-2 border-[#A159AD]">
                        <figure className="px-10 pt-10">
                            <p className='text-7xl text-[#A159AD]'><LuBrain /></p>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl text-gray-800">মানসিক স্বাস্থ্য রিসোর্স</h2>
                            {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
                            <div className="card-actions py-2">
                                <button className="btn text-white px-12 bg-[#A159AD]  w-100%">রিসোর্স দেখুন</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=' col-span-1 p-4'>

                    <div className="card bg-base-100 w-96 shadow-sm border-2 border-[#A159AD]">
                        <figure className="px-10 pt-10">
                            <p className='text-7xl text-[#A159AD]'><CgGames /></p>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl text-gray-800">গেমস সমূহ</h2>
                            {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
                            <div className="card-actions py-2">
                                <button className="btn text-white px-12 bg-[#A159AD]  w-100%">গেমস দেখুন</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=' col-span-1 p-4'>

                    <div className="card bg-base-100 w-96 shadow-sm border-2 border-[#A159AD]">
                        <figure className="px-10 pt-10">
                            <p className='text-7xl text-[#A159AD]'><CgProfile /></p>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-3xl text-gray-800">প্রোফাইল</h2>
                            {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
                            <div className="card-actions py-2">
                                <button className="btn text-white px-12 bg-[#A159AD]  w-100%">প্রোফাইল দেখুন</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Section;