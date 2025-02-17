import PropTypes from 'prop-types'
import './styles/Benefit.css'

function Benefit({text, imageUrl}) {
  return (
    <div className='benefit'>
        <img className='benefit_image' src={imageUrl} alt={text} />
        <p className='benefit_text'>{text}</p>
    </div>
  )
}

Benefit.propTypes = {
    text: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
}

export default Benefit