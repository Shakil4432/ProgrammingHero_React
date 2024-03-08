import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const handleCount=()=>{
        let newCount = count+1;
        setCount(newCount);
    }

    const handleReduce=()=>{
        let newCount = count-1;
        setCount(newCount);
    }
  return (
    <div style={{border:'2px solid white', padding:'20px'}}>
        <h2>Counter : {count}</h2>
        <button onClick={handleCount}>Count</button>
        <button onClick={handleReduce}>Reduce</button>
        {/* <button onClick={()=>setCount(count+1)}>Count</button> */}
    </div>
  )
}
