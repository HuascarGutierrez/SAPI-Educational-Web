import Home from './screens/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import SignUp from './screens/SignUp'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/signup' element={<SignUp/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
