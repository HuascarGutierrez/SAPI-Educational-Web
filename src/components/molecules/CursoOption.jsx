import './styles/CursoOption.css'
import PropTypes from 'prop-types';

function CursoOption({name}) {
  return (
    <button className='cursoOption'>
      {name}
    </button>
  )
}

CursoOption.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CursoOption;