
import React from 'react'
import Navbar from './navbar/Navbar';
import Footer from '../components/footer/Footer';

import { Outlet } from "react-router-dom";


export default function Wrapper() {
    return <div className="wrapper w-full">
        
        <Navbar />

        <main className='max-w-[1200px] px-[10px] first:px-0 mx-auto'>
            <Outlet />
        </main>

        <Footer />
    </div>
}
