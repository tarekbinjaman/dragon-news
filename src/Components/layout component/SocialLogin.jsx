import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Login with</h2>
            <div className='flex flex-col gap-2'>
                <button className="btn"><FcGoogle /> Login with Google
                </button>
                <button className="btn"><FaGithub /> Login with github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;