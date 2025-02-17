import FooterItem from '../molecules/FooterItem'
import Logo from '../molecules/Logo'
import './styles/Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <section className='footer_section'>
        <Logo/>
        <FooterItem imageUrl={'images/svg/phone.svg'} text={'+591 12341234'}/>
        <FooterItem imageUrl={'images/svg/clock.svg'} text={'Response hours: 8 to 20'}/>
        <FooterItem imageUrl={'images/svg/mail.svg'} text={'Email: info@SAPI.edu.com'}/>
      </section>
      <section className='footer_section'>
        <span className='footer_section_title'>Materias</span>
          <p>Algebra</p>
          <p>Calculo</p>
          <p>Fisica</p>
          <p>Quimica</p>
      </section>
      <section className='footer_section'>
        <span className='footer_section_title'>Links</span>
          <p>Sobre Nosotros</p>
          <p>Por qué SAPI</p>
      </section>
    </footer>
  )
}

export default Footer