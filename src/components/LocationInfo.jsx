import React from 'react'

const LocationInfo = ({location}) => {


    
  return (
    <article>
      <ul className='LocationInfo'>
        <li>Name<span>{location?.name}</span></li>
        <li>Type<span>{location?.type}</span></li>
        <li>Dimension<span>{location?.dimension}</span></li>
        <li>Population<span>{location?.residents.length}</span></li>
      </ul>
    </article>
  )
}

export default LocationInfo