import Home from './screens/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import SignUp from './screens/SignUp'
import Login from './screens/Login'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
