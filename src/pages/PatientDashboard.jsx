import React from 'react';
import logo from '../assets/monprova logo2.png';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import { Outlet } from 'react-router-dom';

const PatientDashboard = () => {
    return (

        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default PatientDashboard;