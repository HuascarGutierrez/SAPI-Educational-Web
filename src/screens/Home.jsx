import UnidadesQueOfrecemos from "../components/organisms/UnidadesQueOfrecemos"
import Header from "../components/organisms/Header"
import Presentation from "../components/organisms/Presentation"
import Materias from "../components/organisms/Materias"
import Benefits from "../components/organisms/Benefits"
import PadresYTutores from "../components/organisms/PadresYTutores"
import Footer from "../components/organisms/Footer"
import PropTypes from 'prop-types'
import WhatsSAPI from "../components/organisms/WhatsSAPI"

function Home({user}) {
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center'}}>
        <Header user={user}/> 
        <Presentation/>
        <WhatsSAPI/>
        {/**<UnidadesQueOfrecemos/> */}
        <Materias/>
        <Benefits/>
        <PadresYTutores/>
        <Footer/>
    </div>
  )
}

Home.propTypes = {
  user: PropTypes.object,
}

export default Home