import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';


const Layout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />

            </main>

            <Footer />


        </>
    )
}

export default Layout