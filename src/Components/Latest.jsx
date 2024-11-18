import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
const Latest = () => {
    return (
        <div className='w-11/12 mx-auto bg-gray-200 py-1 px-1 mt-4'>
            <div className='flex gap-2 items-center'>
                <p className='bg-[#D72050] inline-block text-white font-bold px-3 py-1'>Latest</p>
                <Marquee pauseOnHover={true} speed={50} >
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias soluta cupiditate odio. Eveniet exercitationem at, earum consectetur ab error pariatur!
                    </p>
                </Marquee>
            </div>
        </div>
    );
};

export default Latest;