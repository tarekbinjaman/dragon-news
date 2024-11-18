import React from 'react';
import logo from '../assets/Images/logo.png'
import moment from 'moment';
import Latest from './Latest';
const header = () => {
    return (
        <div>
            <div className='flex flex-col mt-[50px] gap-3 justify-center items-center'>
                <img className='w-[400px]' src={logo} alt="" />
                <p className='text-gray-500 '>Journalism Without Fear or Favour</p>
                <p className='text-gray-500 font-bold'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a") }</p>
            </div>
            <Latest></Latest>
        </div>
    );
};

export default header;