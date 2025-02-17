import UnidadesQueOfrecemos from "../components/organisms/UnidadesQueOfrecemos"
import Header from "../components/organisms/Header"
import Presentation from "../components/organisms/Presentation"
import Materias from "../components/organisms/Materias"
import Benefits from "../components/organisms/Benefits"

function Home() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center'}}>
        <Header/>
        <Presentation/>
        <UnidadesQueOfrecemos/>
        <Materias/>
        <Benefits/>
    </div>
  )
}

export default Home