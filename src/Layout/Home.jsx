import React from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header'
import LeftNavbar from '../Components/layout component/LeftNavbar';
import CategoryNews from '../Pages/CategoryNews';
import { Outlet } from 'react-router-dom';
import RightNav from '../Components/layout component/RightNav';


const Home = () => {
    return (
        <div className='font-poppins'>
            <Header></Header>
            <Navbar></Navbar>
            <main className='grid md:grid-cols-12 gap-3 mx-auto w-11/12'>

            <aside className='left col-span-3'>
                <LeftNavbar></LeftNavbar>
            </aside>

            <section className='col-span-6'> 
                <Outlet></Outlet>
            </section>

            <aside className='col-span-3'>
                <RightNav></RightNav>
            </aside>

            </main>
            
        </div>
    );
};

export default Home;