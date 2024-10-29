import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Background from './components/Background'
import Flavours from './components/Flavours'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Background/>
      {/* <Flavours/> */}
      <Routes>
      <Route path='/gro' element={<Flavours/>}/>
      </Routes>
      

      
    </>
  )
}

export default App
