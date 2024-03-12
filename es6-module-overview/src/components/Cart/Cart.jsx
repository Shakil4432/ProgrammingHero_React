import React from 'react'
import './Cart.css'
export default function Cart({cart,handleCartRemove}) {
  return (
    <div className='cart-container'>
        {
            cart.map((bottle,index) => <div key={index}><img className='cartImg' src={bottle.img} alt="" /><br />
            <button  onClick={()=>handleCartRemove(bottle.id)}>Remove item</button>
            </div>)
        }
    </div>
  )
}
