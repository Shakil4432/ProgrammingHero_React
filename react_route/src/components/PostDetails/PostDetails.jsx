import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

const PostDetails = () => {
    const postDetails = useLoaderData();
    const {id,title, body} = postDetails;
    const navigate = useNavigate();

    const handleGoBack = () =>{
        navigate(-1);
    }
  return (
    <div>
        <p>{id}</p>
        <p>{title}</p>
        <p>{body}</p>
        <button className='p-3 m-3 bg-emerald-500 rounded-lg' onClick={handleGoBack}>Go Back</button>
    </div>
  )
}

export default PostDetails