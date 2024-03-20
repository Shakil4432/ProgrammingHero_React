import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <h1>I am Home Component</h1>
        <Outlet></Outlet>
    </div>
  )
}

export default Home