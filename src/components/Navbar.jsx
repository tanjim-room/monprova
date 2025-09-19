import React from 'react';
import logo from '../assets/Monprova Logo.png'

const Navbar = () => {
    return (
        <div className="navbar justify-center items-center bg-purple-200 shadow-sm py-4">
            <div className='flex justify-center items-center gap-2'>
                <div>
                    <img src={logo} alt="" className='w-16 h-16' />
                </div>
                <h2 className='text-4xl font-bold text-gray-700'>মনপ্রভা</h2>
            </div>
        </div>

    );
};

export default Navbar;