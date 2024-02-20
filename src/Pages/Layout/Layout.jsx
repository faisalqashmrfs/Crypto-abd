import React from 'react'
import './Layout.css'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Nanbar'

const Layout = () => {
  return (
    <div className='layout'>
        <Sidebar />
        <div className='rightSecOfLayout'>
          <Navbar />
          <div>{<Outlet/>}</div>
        </div>
    </div>
  )
}

export default Layout
