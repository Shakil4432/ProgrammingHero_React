import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
        <ul>
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
            {/* <a href="about">About</a> */}
            <Link to="/about">About</Link>
            <Link to="/users">Users</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/posts">Posts</Link>
        </ul>
    </div>
  )
}

export default Navbar