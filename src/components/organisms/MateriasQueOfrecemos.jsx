import './styles/MateriasQueOfrecemos.css'
import materias from "../../assets/cursos"
import CursoOption from "../molecules/CursoOption"
import clases from '../../assets/materias'
import Clase from '../molecules/Clase'

function MateriasQueOfrecemos() {
  return (
    <div className='materiasQueOfrecemos'>
        <div className='materiasQueOfrecemos__title'>
          <h2 className="materiasQueOfrecemos__text">Materias que ofrecemos</h2>
          <img className='materiasQueOfrecemos__line' src="src/assets/cursosOfrecemos-line.svg" alt="" />
        </div>
        <section className='materiasQueOfrecemos__options'>
            {
                materias.map((materia, index)=>(
                    <CursoOption name={materia.name} key={index}/>
                ))
            }
        </section>

        <section className='materiasQueOfrecemos__list'>
            {
              clases.map((clase, index)=>(
                <Clase key={index} clase={clase}/>
              ))
            }
        </section>
    </div>
  )
}

export default MateriasQueOfrecemos