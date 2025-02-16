import './styles/HomeTitle.css'
import PropTypes from 'prop-types'
function HomeTitle({color, title}) {
  return (
    <div className='homeTitle'>
      <h2 className={"homeTitle__text homeTitle__text__"+color}>{title}</h2>
      { 
        color == 'orange'?<img className='homeTitle__line' src="src/assets/cursosOfrecemos-line.svg" alt="" />:
        <img className='homeTitle__line' src="src/assets/cursosOfrecemos-line-orange.svg" alt="" /> 
      }
    </div>
  )
}

HomeTitle.propTypes = {
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default HomeTitle