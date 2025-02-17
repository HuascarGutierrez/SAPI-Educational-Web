import UnidadesQueOfrecemos from "../components/organisms/UnidadesQueOfrecemos"
import Header from "../components/organisms/Header"
import Presentation from "../components/organisms/Presentation"
import Materias from "../components/organisms/Materias"
import Benefits from "../components/organisms/Benefits"
import PadresYTutores from "../components/organisms/PadresYTutores"

function Home() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center'}}>
        <Header/>
        <Presentation/>
        <UnidadesQueOfrecemos/>
        <Materias/>
        <Benefits/>
        <PadresYTutores/>
    </div>
  )
}

export default Home