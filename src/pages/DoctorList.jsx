import React from 'react';
import { useState } from "react";
import { FaStar, FaMapMarkerAlt, FaDollarSign, FaSearch, FaFilter } from "react-icons/fa";
import doc1 from '../assets/doc1.jpg'; // Replace with actual image path
import doc2 from '../assets/doc2.jpg'; // Replace with actual image path
import { TbCoinTakaFilled } from 'react-icons/tb';

const DoctorList = () => {
    const [search, setSearch] = useState("");

    const doctors = [
        {
            id: 1,
            name: "ডাঃ রহিমা খাতুন",
            specialty: "মনোরোগ বিশেষজ্ঞ",
            rating: 4.8,
            img:doc1,
            fee: 1200,
            location: "",
            type: "অনলাইন",
        },
        {
            id: 2,
            name: "ডাঃ করিম উদ্দিন",
            specialty: "সাইকোলজিস্ট",
            rating: 4.5,
            img:doc2,
            fee: 1500,
            location: "গ্রিন হাসপাতাল",
            type: "চেম্বার",
        },
        {
            id: 3,
            name: "ডাঃ ফাতিমা আলম",
            specialty: "সাইকোলজিস্ট",
            rating: 4.9,
            img:doc1,
            fee: 1000,
            location: "ম্যাক্স হাসপাতাল",
            type: "উভয়",
        },
        {
            id: 4,
            name: "ডাঃ আহমেদ হাসান",
            specialty: "মনোরোগ বিশেষজ্ঞ",
            rating: 4.7,
            img:doc2,
            fee: 2000,
            location: "",
            type: "অনলাইন",
        },
    ];

    const filteredDoctors = doctors.filter((doc) =>
        doc.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6">ডাক্তার খুঁজুন</h2>

            {/* Search Bar */}
            <div className="flex items-center gap-2 mb-6">
                {/* <button className="btn btn-outline btn-sm">
                    <FaFilter /> ফিল্টার
                </button> */}
                <input
                    type="text"
                    placeholder="ডাক্তারের নাম বা বিশেষজ্ঞ খুঁজুন..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="input input-bordered flex-1"
                />
                <button className="btn btn-primary bg-[#A159AD] border-none">
                    <FaSearch /> খুঁজুন
                </button>
            </div>

            {/* Doctor Cards */}
            <div className="grid md:grid-cols-2 gap-6">
                {filteredDoctors.map((doc) => (
                    <div key={doc.id} className="card bg-white shadow-md rounded-xl p-5 border">
                        <div className="flex items-center space-x-4">
                            {/* Avatar */}
                            <div className="avatar placeholder">
                                <div className="bg-gray-200 text-neutral-content rounded-full w-16">
                                    <img src={doc.img} alt="" />
                                </div>
                            </div>

                            {/* Doctor Info */}
                            <div className="flex-1">
                                <h3 className="font-bold text-lg">{doc.name}</h3>
                                <p className="text-sm text-gray-500">{doc.specialty}</p>
                                <div className="flex items-center text-yellow-500 text-sm ">
                                    {/* <FaStar className="mr-1 " /> {doc.rating} */}
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <TbCoinTakaFilled className='text-lg mr-2' /> {doc.fee} ৳
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <FaMapMarkerAlt className="mr-1" /> {doc.location}
                                </div>
                                <span
                                    className={`badge mt-2 ${doc.type === "অনলাইন"
                                            ? "badge-success"
                                            : doc.type === "চেম্বার"
                                                ? "badge-warning"
                                                : "badge-warning"
                                        }`}
                                >
                                    {doc.type}
                                </span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-8 flex justify-between">
                            <button className="btn btn-outline btn-sm border-[#A159AD]">প্রোফাইল দেখুন</button>
                            <button className="btn btn-primary btn-sm bg-[#A159AD] border-none">অ্যাপয়েন্টমেন্ট নিন</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoctorList;