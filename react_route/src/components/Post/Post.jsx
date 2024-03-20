import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {userId,id,title} = post;
    const navigate = useNavigate();

    const handleNavigate=()=>{
        navigate(`/post/${id}`);
    }
  return (
    <div className='border-4 border-pink-400 p-10 rounded-xl'>
        <p>UserId : {userId}</p>
        <p>Id : {id}</p>
        <p>Title : {title}</p>
        <Link to = {`/post/${id}`}>See Details</Link>
        <button onClick={handleNavigate}>Use Onclick for see details</button>
        
    </div>
  )
}

export default Post