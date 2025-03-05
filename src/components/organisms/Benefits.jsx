import Benefit from "../molecules/Benefit"
import HomeTitle from "../molecules/HomeTitle"
import './styles/Benefits.css'

function Benefits() {
  return (
    <div className="benefits">
        <section className="benefits_section">
            <div className="benefits_section_title">
            <HomeTitle color={'green'} title={'Beneficios de SAPI'}/>
            </div>
            <div className="benefits_section_list">
            <Benefit text='Clases pregrabadas disponibles mediante la plataforma SAPI' imageUrl='images/svg/squares.svg'/>
            <Benefit text='Diseñado para estudiantes con dificultades en estas materias.' imageUrl='images/svg/rectangles.svg'/>
            <Benefit text='Disponible desde cualquier lugar con conexión a internet.' imageUrl='images/svg/tutor.svg'/>
            </div>
        </section>
        <img className="benefits_image" src="images/benefits-girl.webp" alt="" />
    </div>
  )
}

export default Benefits