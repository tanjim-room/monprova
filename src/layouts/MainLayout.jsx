import React from 'react';

import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className='max-w-screen mx-auto font-nato'>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;