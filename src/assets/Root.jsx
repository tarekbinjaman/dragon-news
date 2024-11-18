import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Layout/Home';

const Root = () => {
    return (
        <div className='font-poppins'>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;