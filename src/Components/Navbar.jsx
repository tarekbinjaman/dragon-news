import React from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/Images/user.png';

const Navbar = () => {
    return (
        <div className="w-11/12 mx-auto mt-3">
            <div className="grid grid-cols-3 items-center">
                {/* Start-aligned */}
                <div className="flex justify-start">
                    <span></span>
                </div>

                {/* Center-aligned */}
                <div className="flex justify-center">
                    <ul className="flex gap-5">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/career">Career</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>

                {/* End-aligned */}
                <div className="flex justify-end items-center gap-2">
                    <img className="w-[40px] h-[40px]" src={user} alt="User avatar" />
                    <Link to ="/auth/login" className="bg-gray-500 text-white px-4 py-2 rounded-none">Login</Link> 
                </div>
            </div>
        </div>
    );
};

export default Navbar;
