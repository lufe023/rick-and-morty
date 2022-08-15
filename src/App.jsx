import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import Footer from './components/Footer'
import LocationInfo from './components/LocationInfo'


function App() {

  const [location, setLocation] = useState() 
  const [searchInput, setSearchInput] = useState('') 
  const [list, setList] = useState()
  useEffect(() => {
    let numberLocation
    if(searchInput=== ''){
      numberLocation = Math.floor(Math.random() * (126-1)+1)
    }else{
      numberLocation = searchInput
    }

    const URL =`https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(URL)
    .then(res => setLocation(res.data))
    .catch(err => console.log(err))
  }, [searchInput])
  


//other use Effect for lation list
let locationTotal=[];
for(let i=1; i<=126; i++){
  locationTotal.push(i)
}
useEffect(() => {
  const URLList =`https://rickandmortyapi.com/api/location/${locationTotal}`
  axios.get(URLList)
  .then(resA => setList(resA.data))
  .catch(errA => console.log(errA))
},[])



//busqueda por input

const handdleSubmit = e => {
  e.preventDefault()

  setSearchInput(e.target.search.value)
}


  return (
    <div className="App">
      <header className='mainHeader'>
      <h1>Rick and Morty</h1>
      <img src='./img/Rick-And-Morty-PNG-Image.png' />
      </header>
    <div className="mainContainer">

      <div className="description">
    <form onSubmit={handdleSubmit}>
      
    <select id='search'>
      
      {
        list?.map(urli => (
        <option key={urli.id} value={urli.id}>{urli.name}</option>
            ))
        }
    </select>
      
      <button className='searchButton'>Search</button>
    </form>
    <LocationInfo location={location} />
    </div>
    <div className='secction grid'>
      {
        location?.residents.map(url => (
          <CardResident
          key={url}
          url={url}
          />
        ))
      }
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default App
