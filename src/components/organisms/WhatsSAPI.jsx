import './styles/WhatsSAPI.css'
import HomeTitle from '../molecules/HomeTitle'

function WhatsSAPI() {
  return (
    <>
    <HomeTitle color={'orange'} title={'Nuestra Plataforma Virtual SAPI'}/>
    <section className="whatsSAPI">
        <div className='whatsSAPI_description'>
            <h3 className='whatsSAPI_description_h3'>Plataforma Educativa <br />(SAPI)</h3>
            <p className='whatsSAPI_description_p'>
            SAPI es una plataforma educativa diseñada para reforzar los conocimientos de los estudiantes en álgebra, cálculo, física y química. El contenido de la plataforma estará conformada por materias, cada materia tendrá unidades, estará conformada por una parte teórica y otra práctica.
            </p>
            <button className='whatsSAPI_description_button'>
                Ver mas...
            </button>
        </div>
        <div className='whatsSAPI_image'>
            <img src="images/zowl.webp" alt="zowl" />
            <div className='whatsSAPI_image_background'></div>
        </div>
    </section>
    </>
  )
}

export default WhatsSAPI