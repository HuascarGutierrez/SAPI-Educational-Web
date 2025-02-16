import materias from "../../assets/materias"
import HomeTitle from "../molecules/HomeTitle"
import Materia from "../molecules/Materia"
import './styles/Materias.css'

function Materias() {
  return (
    <section className="materias">
        <HomeTitle color={'green'} title={'Materias'}/>
        <span className="materias_span">Aprende a tu ritmo: desde conceptos básicos hasta desafíos avanzados en las materias clave. Avanza con lecciones personalizadas y alcanza el oro.</span>
        <div className="materias_list">
          {
            materias.map((materia, index)=>(
              <Materia key={index} materia={materia}/>
            ))
          }
        </div>
    </section>
  )
}

export default Materias