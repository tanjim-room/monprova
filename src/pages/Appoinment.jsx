import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import doc1 from '../assets/doc1.jpg'; // Replace with actual image path
import doc2 from '../assets/doc2.jpg'; // Replace with actual image path


const Appoinment = () => {
    const [activeTab, setActiveTab] = useState("upcoming");

    const upcomingAppointments = [
        {
            id: 1,
            doctor: "ডাঃ রহিমা খাতুন",
            specialty: "মনোরোগ বিশেষজ্ঞ",
            type: "অনলাইন",
            date: "২৫ মার্চ",
            time: "৩:০০ PM",
            img: doc1,
            actions: ["বিস্তারিত", "যোগ দিন"],
        },
        {
            id: 2,
            doctor: "ডাঃ করিম উদ্দিন",
            specialty: "সাইকোলজিস্ট",
            type: "চেম্বার",
            date: "২৮ মার্চ",
            time: "১০:০০ AM",
            img: doc2,
            actions: ["বিস্তারিত"],
        },
    ];

    const completedAppointments = [
        {
            id: 3,
            doctor: "ডাঃ মেহেদী হাসান",
            specialty: "মনোরোগ বিশেষজ্ঞ",
            type: "অনলাইন",
            date: "১৫ মার্চ",
            time: "১২:০০ PM",
            img: doc2,
            actions: ["বিস্তারিত", "আবার দেখান"],
        },
        {
            id: 4,
            doctor: "ডাঃ ফারহানা আক্তার",
            specialty: "সাইকোলজিস্ট",
            type: "চেম্বার",
            date: "১০ মার্চ",
            time: "৫:০০ PM",
            img: doc1,
            actions: ["বিস্তারিত", "আবার দেখান"],
        },
    ];

    const appointments =
        activeTab === "upcoming" ? upcomingAppointments : completedAppointments;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-4xl font-bold mb-4">আপনার অ্যাপয়েন্টমেন্ট</h2>

            {/* Tabs */}
            <div role="tablist" className="tabs tabs-boxed mb-6">
                <h2 className=''>
                    <Link
                        role="tab"
                        className={`tab ${activeTab === "upcoming" ? "tab-active" : ""} text-2xl`}
                        onClick={() => setActiveTab("upcoming")}
                    >
                        আসন্ন
                    </Link>
                </h2>
                <h2 className='text-xl'>
                    <Link role="tab"
                        className={`tab ${activeTab === "completed" ? "tab-active" : ""} text-2xl`}
                        onClick={() => setActiveTab("completed")}>



                        সম্পন্ন

                    </Link>
                </h2>
            </div>

            {/* Appointment Cards */}
            <div className="space-y-6">
                {appointments.map((appt) => (
                    <div
                        key={appt.id}
                        className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                                    <img src={appt.img} />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold">{appt.doctor}</h3>
                                <p className="text-sm text-gray-500">{appt.specialty}</p>
                                <p className="text-xs text-blue-600">{appt.type}</p>
                                <p className="text-sm">
                                    {appt.date} • {appt.time}
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            {appt.actions.map((action, i) => (
                                <button
                                    key={i}
                                    className={`btn btn-sm bg-[#A159AD] border-none text-white ${action === "যোগ দিন" || action === "বিস্তারিত"
                                            ? "btn-primary"
                                            : "btn-outline"
                                        }`}
                                >
                                    {action}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Appoinment;