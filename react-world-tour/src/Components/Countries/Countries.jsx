import React, { useEffect, useState } from 'react'
import Country from '../Country/Country';
import './Countries.css';

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [flags, setFlags] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries => setCountries(countries))
    },[])

    const handleVisitedCountries = (country) =>{
       const setVisitedCountriesArray = [...visitedCountries,country];
       setVisitedCountries(setVisitedCountriesArray);
       console.log(country);
      
    }

    const handleSetFlags = (flagsPng)=>{
        const setFlagsArray = [...flags, flagsPng];
        setFlags(setFlagsArray);
        
    }
  return (
    <div>Countries : {countries.length}
    <div>
        {flags.map((flag,index)=> <img key={index} src={flag}></img>)}
    </div>
        <div>
            <h2>Countries : {visitedCountries.length}</h2>
            {visitedCountries.map(country => {
            return (
                <ul>
                    <li k>
                    {country.name.common}
                    </li>
                </ul>
            )
        })}
        </div>
   <div className='countries'>
   {
        countries.map((country, index) => <Country key={index} handleSetFlags={handleSetFlags} handleVisitedCountries={handleVisitedCountries} country={country}></Country>)
    }                                 
   </div>
    
    </div>
  )
}

