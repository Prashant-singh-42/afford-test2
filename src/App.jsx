import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './components/Register'
import Login from './components/Login'

function App() {

  const [showWhat, setshowWhat] = useState(false)

  return (
    <>
      <div>
        <button onClick={() => setshowWhat(!showWhat)} >toggel</button>
      </div>
      {
        showWhat ? <Login /> : <Register />
      }
    </>
  )
}

export default App
