import PropTypes from 'prop-types'
import './styles/Materia.css'

function Materia({materia}) {
  return (
    <div className='materia'>
        <img className='materia_image' src={materia.imageUrl} alt={materia.name} />
        <span className='materia_span'>{materia.name}</span>
        <p className='materia_p'>{materia.description}</p>
    </div>
  )
}

Materia.propTypes = {
    materia: PropTypes.object.isRequired,
}

export default Materia