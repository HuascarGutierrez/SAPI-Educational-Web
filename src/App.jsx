import Home from './screens/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import SignUp from './screens/SignUp'
import Login from './screens/Login'
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from './config/app'
import Test from './screens/Test'
import TuEspacio from './screens/TuEspacio'

function App() {
  const [user, setUser] = useState(null);

  useEffect(()=> {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser){
        setUser(currentUser);
        //console.log('currentUser');
      } else setUser(null);
    })

    /**getRedirectResult(auth)
      .then((result) => {
        console.log(result)
        if (result?.user) {
          setUser(result.user);
          console.log("Usuario autenticado con Google:", result.user);
        }
      })
      .catch((error) => {
        console.error("Error en la autenticación con Google:", error);
      });*/
    return () => unsubcribe();
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<Home user={user}/>}/>
          <Route path='signup' element={<SignUp/>} />
          <Route path='login' element={<Login/>} />
          <Route path='test' element={<Test/>} />
          <Route path='tuEspacio' element={<TuEspacio user={user}/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
