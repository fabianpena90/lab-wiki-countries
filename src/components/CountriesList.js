import React from 'react';
import { Link } from "react-router-dom";
import countries from '../countries.json'


function CountriesList(props) {
  let countryLinks = countries.map((eachCountry) =>{
    console.log(eachCountry)
    return (
      <li key={eachCountry.cca3}>
        <Link to={`/countries/${eachCountry.cca3}`} >
          {eachCountry.name.common}
        </Link>
      </li>
    )
  })
  return (
    <div>
      <ul style={{listStyle: 'none', textAlign: 'left'}}>
        <li>{countryLinks}</li>
      </ul>
    </div>
  );
}

export default CountriesList;