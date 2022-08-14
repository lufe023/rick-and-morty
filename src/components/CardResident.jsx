import React from 'react'
import useFetch from '../hooks/useFetch'

const CardResident = ({url}) => {

  const resident = useFetch(url)


  let status = 2;
  const style =[ {backgroundColor: "green"}, {backgroundColor: "red"}, {backgroundColor: "gray"}]


if(resident?.status==="Alive")
{
  status = 0
}
else if(resident?.status==="Dead")
{
  status = 1
}


  return (
    <article className='CardResident'>
      <header>
      <div className='status'><div className='circle' style={style[status]}></div>
        <span>{resident?.status}</span>
        </div>
        <img src={resident?.image} alt={`image of ${resident?.name}`}/>
        
      </header>
      <div>
        <h3 className='residentName'>{resident?.name}</h3>
        <div className='separator'></div>
        <ul className='residentDetails'>
          <li><span>Specie</span>
          {resident?.species}
          </li>
          <li><span>Origin</span>
          {resident?.origin.name}
          </li>
          <li><span>eppisodes where appear</span>
          {resident?.episode.length}
          </li>
        </ul>
      </div>
    </article>
  )
}

export default CardResident