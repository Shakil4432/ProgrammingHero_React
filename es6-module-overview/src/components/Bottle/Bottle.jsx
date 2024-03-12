import React from 'react'
import './Bottle.css'
export default function Bottle({bottle,handleBottle}) {
    const {name,price,img} = bottle
  return (
    <div className='bottle_container'>
        <h3>Name : {name}</h3>
        <img className='bottle_img' src={img} alt="" />
        <p>Price : {price}$</p>
        <button onClick={()=>handleBottle(bottle)}>Purchase</button>
    </div>
  )
}
