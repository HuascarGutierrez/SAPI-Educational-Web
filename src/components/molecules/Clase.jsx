import PropTypes from 'prop-types'
import './styles/Clase.css'

function Clase({clase}) {
  return (
    <div className='clase'>
        <img className='clase__img' src={clase.imageUrl} alt="" />
        <h4 className='clase__h4'>{clase.name}</h4>
        <p className='clase__p'>{clase.description}</p>
        <button className='clase__button'>Toma ya</button>
    </div>
  )
}

Clase.propTypes = {
    clase: PropTypes.object.isRequired,
}

export default Clase