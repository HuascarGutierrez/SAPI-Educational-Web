import Home from './screens/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import SignUp from './screens/SignUp'
import Login from './screens/Login'
import { useEffect, useState } from "react"
import { onAuthStateChanged, getRedirectResult} from "firebase/auth"
import { auth } from './config/app'

function App() {
  const [user, setUser] = useState(null);

  useEffect(()=> {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser ? currentUser : null);
      console.log(currentUser)
    })

    getRedirectResult(auth)
      .then((result) => {
        console.log(result)
        if (result?.user) {
          setUser(result.user);
          console.log("Usuario autenticado con Google:", result.user);
        }
      })
      .catch((error) => {
        console.error("Error en la autenticación con Google:", error);
      });
    return () => unsubcribe();
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<Home user={user}/>} />
          <Route path='signup' element={<SignUp/>} />
          <Route path='login' element={<Login/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
