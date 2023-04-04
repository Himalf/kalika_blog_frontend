import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import Footer from '../footer/Footer'

const Layout = ({ children }) => {
    const [sideMenu, setsideMenu] = useState(false)
    return (
        <div>
            <div><Navbar setsideMenu={setsideMenu} /></div>
            <div><Sidebar sideMenu={sideMenu} setsideMenu={setsideMenu} /></div>
            <div>{children}</div>
            <div><Footer /></div>
        </div>
    )
}

export default Layout