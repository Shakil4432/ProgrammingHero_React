import React from 'react'
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id,name,email}=user;
  return ( 
    <div className='border-4 border-yellow-400 p-5 rounded-xl'>
        <p>ID: {id}</p>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <Link to={`/user/${id}`}>User details</Link>
        <Link to={`/user/${id}`}><button className='p-4 rounded-lg m-2 bg-yellow-300'>Click Me</button></Link>
    </div>
  )
}

export default User