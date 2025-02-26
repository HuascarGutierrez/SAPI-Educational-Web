import './styles/Header.css'
import Logo from "../molecules/Logo"
import Button from '../molecules/Button'
import PropTypes from 'prop-types'
import { getAuth, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
function Header({user}) {
  const navigate = useNavigate();

  const alertSignOut = () => {
    Swal.fire({
      title: "Hasta pronto!",
      text: "No te olvides de seguir adelante.",
      icon: "info",
      iconColor: 'var(--color-green-primary)',
      confirmButtonText: "OK",
      background: "var(--color-green-light)", 
      color: "var(--color-green-primary)",
      confirmButtonColor: "var(--color-green-primary)",
    });
  }

  const alertWarning = (texto) => {
    Swal.fire({
      title: 'Error',
      text: texto,
      icon: 'error',
      iconColor: '#ff0000',
      confirmButtonText: 'Entendido',
      background: 'var(--color-blue)',
      color: '#ff0000',
      confirmButtonColor: '#ff0000',
    })
  }

  const handleSignOut = async() => {
    const auth = getAuth();
    signOut(auth).then(() => {
      alertSignOut();
      navigate('/');
    }).catch((error) => {
      alertWarning(`Error de logout: ${error}`);
    })
  }

  const handleSignUpNav = () => {
    navigate('/signup')
  }
  
  const handleLoginNav = () => {
    navigate('/login')
  } 

  const handleOptionsNav = () => {
    user ? navigate('/tuEspacio') : navigate('/login');
  }

  return (
    <header className="main-header">
        <Logo/>
        <p className="main-header__option">Home</p>
        <p className="main-header__option">SAPI</p>
        <p onClick={handleOptionsNav} className="main-header__option">Blog</p>
        <p className="main-header__option">Sobre Nosotros</p>
        {/**<div style={{display: 'flex', alignItems: 'center', gap: '10px', minWidth: '25%', justifyContent: 'space-around'}}>
          {user?.emailVerified? 
          <>
            <p className='main-header__option'>Bienvienido<br/> {user.displayName}</p> 
            <Button text="Cerrar Sesión" funcion={handleSignOut}/>
          </> :
          <>
            <Button text="Inicio Sesión" funcion={handleLoginNav}/>
            <Button text="Registrarse" color="green" funcion={handleSignUpNav}/>
          </>}
        </div> */}
    </header>
  )
}

Header.propTypes = {
  user: PropTypes.object,
}

export default Header