import UnidadesQueOfrecemos from "../components/organisms/UnidadesQueOfrecemos"
import Header from "../components/organisms/Header"
import Presentation from "../components/organisms/Presentation"
import Materias from "../components/organisms/Materias"

function Home() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
        <Header/>
        <Presentation/>
        <UnidadesQueOfrecemos/>
        <Materias/>
    </div>
  )
}

export default Home