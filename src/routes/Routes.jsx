import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Product from '../pages/Product';
import Profile from '../pages/Profile';
import Details from '../pages/Details';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from '../PrivateRoute';


const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                
            },

        ]
    }
]);

export default routes;