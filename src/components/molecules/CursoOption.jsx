import './styles/CursoOption.css'
import PropTypes from 'prop-types';

function CursoOption({name}) {
  return (
    <div className='cursoOption'>
      <p className='cursoOption__name'>{name}</p>
    </div>
  )
}

CursoOption.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CursoOption;