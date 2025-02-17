import PropTypes from 'prop-types'
import './styles/Materia.css'
import { useState } from 'react'
function Materia({materia}) {
  const [hover, setHover] = useState(false)
  return (
    <div onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)} className='materia'>
        <img className='materia_image' src={materia.imageUrl} alt={materia.name} />
        <span className='materia_span'>{materia.name}</span>
        <p className='materia_p'>{materia.description}</p>
        <button className='materia_button'>{hover?'Explora el curso':'More'}</button>
    </div>
  )
}

Materia.propTypes = {
    materia: PropTypes.object.isRequired,
}

export default Materia