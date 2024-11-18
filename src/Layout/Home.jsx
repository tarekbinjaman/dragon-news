import React from 'react';
import Navbar from '../assets/Navbar';
import Header from '../Components/Header'
import Main from '../Components/Main';


const Home = () => {
    return (
        <div className='font-poppins'>
            <Header></Header>
            <Navbar></Navbar>
            <Main></Main>
        </div>
    );
};

export default Home;