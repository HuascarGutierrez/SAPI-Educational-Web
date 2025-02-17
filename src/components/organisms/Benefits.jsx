import Benefit from "../molecules/Benefit"
import HomeTitle from "../molecules/HomeTitle"
import './styles/Benefits.css'

function Benefits() {
  return (
    <div className="benefits">
        <section className="benefits_section">
            <div className="benefits_section_title">
            <HomeTitle color={'orange'} title={'Beneficios de SAPI'}/>
            </div>
            <div className="benefits_section_list">
            <Benefit text='Adaptamos el contenido a tu nivel con pruebas de diagnóstico y rutas de estudio únicas. ¡Avanza a tu ritmo y sin presión!' imageUrl='images/svg/squares.svg'/>
            <Benefit text='Gana insignias (carbón, bronce, plata, oro) al superar retos y domina las materias mientras te diviertes.' imageUrl='images/svg/rectangles.svg'/>
            <Benefit text='Un tutor virtual te guía paso a paso en ejercicios interactivos y explica tus errores en tiempo real.' imageUrl='images/svg/tutor.svg'/>
            </div>
        </section>
        <img className="benefits_image" src="images/benefits-girl.webp" alt="" />
    </div>
  )
}

export default Benefits