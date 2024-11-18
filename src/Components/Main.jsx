import React, { useState } from 'react';
import LeftNavbar from './layout component/LeftNavbar';
import RightNav from './layout component/RightNav';
const Main = () => {

    return (
        <div className='grid md:grid-cols-12 gap-3 mx-auto w-11/12'>
            <aside className='left col-span-3'>
                <LeftNavbar></LeftNavbar>
            </aside>
            <section className='col-span-6'>Main content</section>
            <aside className='col-span-3'>
                <RightNav></RightNav>
            </aside>
        </div>
    );
};

export default Main;