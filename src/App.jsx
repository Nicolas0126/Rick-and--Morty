import { useEffect, useState } from 'react'
import './App.css'
import { randomDimension } from './utils/random'
import axios from 'axios'
import Location from './components/Location'
import ResidentList from './components/ResidentList'

function App() {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${randomDimension()}`
    
    axios.get(URL)
    .then(({data}) => setLocation(data))
    .catch((err) => console.log(err))
  }, [])

  return (
    <main className='bg-[url(/public/bg.png)] bg-cover bg-center min-h-screen text-white'>
      
      <Location location = {location} setLocation= {setLocation} />

      <ResidentList residents = {location?.residents} location = {location}/>

    </main>
  )
}

export default App
