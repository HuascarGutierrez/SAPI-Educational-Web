import './styles/Header.css'
import Logo from "../molecules/Logo"
import Button from '../molecules/Button'
import PropTypes from 'prop-types'
import { getAuth, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
function Header({user}) {
  const navigate = useNavigate();

  const handleSignOut = async() => {
    const auth = getAuth();
    signOut(auth).then(() => {
      alert('Sesion finalizada');
      navigate('/')
    }).catch((error) => {
      alert('Error de logout: ', error)
    })
  }

  const handleSignUpNav = () => {
    navigate('/signup')
  }
  
  const handleLoginNav = () => {
    navigate('/login')
  } 

  return (
    <header className="main-header">
        <Logo/>
        <p className="main-header__option">Home</p>
        <p className="main-header__option">Materias</p>
        <p className="main-header__option">Blog</p>
        <p className="main-header__option">Sobre Nosotros</p>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px', minWidth: '25%'}}>
          {user ? 
          <>
            <p className='main-header__option'>Bienvienido<br/> {user.providerData[0].email}</p> 
            <Button text="Cerrar Sesión" funcion={handleSignOut}/>
          </> :
          <>
            <Button text="Inicio Sesión" funcion={handleLoginNav}/>
            <Button text="Registrarse" color="green" funcion={handleSignUpNav}/>
          </>}
        </div>
    </header>
  )
}

Header.propTypes = {
  user: PropTypes.object.isRequired,
}

export default Header