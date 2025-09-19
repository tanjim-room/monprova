import React from 'react';
import logo from '../assets/monprova logo2.png';

const PatientDashboard = () => {
    return (
        <div className='grid grid-cols-5 gap-4 p-4'>
            <div className='bg-blue-200 col-span-1'>
                <div className="flex justify-start items-center gap-4 mb-6">
                    <img src={logo} alt="logo" className="w-16 h-16" />
                    <h2 className="text-4xl font-semibold text-gray-700">মনপ্রভা</h2>
                </div>
            </div>
            <div className='bg-green-200 col-span-4'>

            </div>
        </div>
    );
};

export default PatientDashboard;