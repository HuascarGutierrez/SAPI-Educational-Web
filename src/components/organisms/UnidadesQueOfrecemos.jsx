import './styles/UnidadesQueOfrecemos.css'
import materias from "../../assets/cursos"
import CursoOption from "../molecules/CursoOption"
import clases from '../../assets/materias'
import Clase from '../molecules/Clase'
import HomeTitle from '../molecules/HomeTitle'

function UnidadesQueOfrecemos() {
  return (
    <div className='unidadesQueOfrecemos'>
        <HomeTitle color='orange' title={'Unidades que ofrecemos'}/>
        <section className='unidadesQueOfrecemos__options'>
            {
                materias.map((materia, index)=>(
                    <CursoOption name={materia.name} key={index}/>
                ))
            }
        </section>

        <section className='unidadesQueOfrecemos__list'>
            {
              clases.map((clase, index)=>(
                <Clase key={index} clase={clase}/>
              ))
            }
        </section>
    </div>
  )
}

export default UnidadesQueOfrecemos