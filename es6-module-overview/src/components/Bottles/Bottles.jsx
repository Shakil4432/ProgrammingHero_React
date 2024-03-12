import React, { useEffect, useState } from 'react'
import Bottle from '../Bottle/Bottle'
import './Bottles.css'
import { addToLS, getDatafromLS, removeCartLS } from '../../localStorage'
import Cart from '../Cart/Cart'

export default function Bottles() {
    const [bottles, setBottles]=useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data=>setBottles(data))
    },[])
    const bottleCart = [];
    useEffect(()=>{
      console.log(bottles.length);
      if(bottles.length>0){
        const getStoredCartId = getDatafromLS();
        for(const id of getStoredCartId){
          console.log(id);
          const bottle = bottles.find(bottle => bottle.id ===id);
          bottleCart.push(bottle)
        }
      }

     setCart(bottleCart);
    },[bottles])

    const handleBottle =(bottle)=>{
        const bottleContent =[...cart, bottle];
        addToLS(bottle.id);
        setCart(bottleContent);
    }

    const handleCartRemove = (idx)=>{
      const bottleId  =cart.filter(bottle => idx !== bottle.id);
      setCart(bottleId);
      removeCartLS(idx);
    }
  return (
    <div>
        <h3>Bottles Here : {bottles.length} </h3>
        <h2>Cart Here : {cart.length}</h2>
        <Cart cart={cart} handleCartRemove={handleCartRemove}></Cart>
       <div className='Bottles_container'>
        {
            bottles.map(bottle => <Bottle handleBottle={handleBottle} key={bottle.id} bottle={bottle}></Bottle>)
        }
       </div>
    </div>
  )
}
