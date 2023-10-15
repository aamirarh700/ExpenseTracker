import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='px-8 md:px-14 lg:px-35 pb-10 pt-7'>
      <Header/>
      <Hero/>
      
    </div>
  )
}

export default App
