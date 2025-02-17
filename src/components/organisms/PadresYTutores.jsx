import HomeTitle from "../molecules/HomeTitle"
import Benefit from "../molecules/Benefit"
import './styles/PadresYTutores.css'

function PadresYTutores() {
  return (
    <>
        <div className="benefits PadresYTutores">
            <section className="benefits_section PadresYTutores_section">
                <div className="benefits_section_title">
                <HomeTitle color={'green'} title={'Para Padres y Tutores'}/>
                </div>
                <div className="benefits_section_list ">
                <Benefit text='Recibe reportes detallados del avance de tu hijo y celebra sus logros junto a él.' imageUrl='images/svg/squares.svg'/>
                <Benefit text='Planes flexibles y precios ajustados para que la educación de calidad no sea una ilusión.' imageUrl='images/svg/rectangles.svg'/>
                <Benefit text='"Que tu hijo desarrolle habilidades STEM críticas para carreras universitarias y profesionales en auge.' imageUrl='images/svg/tutor.svg'/>
                </div>
            </section>
            <img className="benefits_image PadresYTutores_image" src="images/PadresYTutores.webp" alt="" />
        </div>
    </>
  )
}

export default PadresYTutores