import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


export const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}
