import './styles/Logo.css'

function Logo() {
  return (
    <div className="main-logo">
        <img className='main-logo__logo' src="src/assets/logo.svg"/>
        <span className='main-logo__name'>SAPI</span>
    </div>
  )
}

export default Logo