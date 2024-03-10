import React, { useState } from 'react'
import './Country.css'
export default function Country({country, handleVisitedCountries, handleSetFlags}) {
   
    const [visited, setVisited] = useState(false);
    const {name,flags} = country;
    function handleClicked(){
        setVisited(!visited);
    }
  return (
    <div className='country'>
        <h4>Name : {name?.common}</h4> 
        <h4>Official Name : {name?.official}</h4> 
        <img src={flags?.png} alt="" />
        <button onClick={()=>handleVisitedCountries(country)}>Mark As Read</button>
        <button onClick={handleClicked}>{visited ? 'Going' : 'Visited'}</button><br />
        <button onClick={()=>handleSetFlags(country.flags.png)}>Add Flags</button>
        <p>{visited ? 'jata hoba bohudur' : 'tui ja ami gaci'}</p>

    </div>
  )
}
