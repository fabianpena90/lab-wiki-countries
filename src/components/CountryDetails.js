import React from 'react';
import countries from '../countries.json'
import { Link } from "react-router-dom";

function CountryDetails(props) {
  console.log(props)
  let countryDetails = countries.find((eachCountry) => {
    return eachCountry.cca3 === props.match.params.id
  })

  let countryBorders = countryDetails.borders.map((eachBorder) => {
    return (
      <li key={eachBorder}>
        <Link to={`/countries/${eachBorder}`}>
          {eachBorder}
        </Link>
      </li>
    )
  })

  console.log(countryDetails)
  return( 
    <div className="countryDetails">
      <h2>{countryDetails.flag} {countryDetails.name.common}</h2>
      <p>{countryDetails.capital}</p>
      <p>{countryDetails.area}</p>
      <p>{countryBorders}</p>
    </div>
    )
}

export default CountryDetails;