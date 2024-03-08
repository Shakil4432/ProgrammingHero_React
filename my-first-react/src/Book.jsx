import React from 'react'
import "./Book.css"
export default function Book({book}) {
    const {id,name,price} = book;
  return (
    <div className='book'>
        <h2>Book:{id}</h2>
        <h2>name:{name}</h2>
        <h2>price:{price}</h2>
    </div>
  )
}
