import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const Findus = () => {
    return (
        <div className='mt-5'>
            <h2 className='font-semibold mb-3'>Find Us on</h2>
            <div>
                <div className="join flex join-vertical *:bg-white">
                    <button className="btn join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
                    <button className="btn join-item justify-start"><BsTwitter></BsTwitter> Twitter</button>
                    <button className="btn join-item justify-start"><BsInstagram></BsInstagram> Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default Findus;