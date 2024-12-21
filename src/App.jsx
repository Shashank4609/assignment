import { useState } from 'react'
import './App.css'
import Signin from './pages/Signin.jsx'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Profile from './pages/Profile.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
        <Routes>
          <Route path="/" element={<Signin/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
        </Routes>
       
      
    </>
  )
}

export default App
