import Home from './screens/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import SignUp from './screens/SignUp'
import Login from './screens/Login'
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from './config/app'

function App() {
  const [user, setUser] = useState(null);

  useEffect(()=> {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
    return () => unsubcribe();
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<Home user={user}/>} />
          <Route path='signup' element={<SignUp/>} />
          <Route path='login' element={<Login/>} />

          <Route path="/hola" element={<Home/>}>
            <Route path='signup' element={<SignUp/>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
