import React from 'react'
import { useLoaderData } from 'react-router-dom'

const UserDetails = () => {
    const user = useLoaderData();
    const {id,name, email}= user;
    
  return (
    <div>
      <h1>ID : {id}</h1>
      <h1>Name : {name}</h1>
      <h1>Email : {email}</h1>
    </div>
  )
}

export default UserDetails