import './styles/Header.css'
import Logo from "../molecules/Logo"
import Button from '../molecules/Button'

function Header() {

  return (
    <header className="main-header">
        <Logo/>
        <p className="main-header__option">Home</p>
        <p className="main-header__option">Materias</p>
        <p className="main-header__option">Blog</p>
        <p className="main-header__option">Sobre Nosotros</p>
        <div style={{display: 'flex', gap: '10px', width: '25%'}}>
          <Button text="Inicio Sesión"/>
          <Button text="Registrarse" color="green"/>
        </div>
    </header>
  )
}

export default Header