
import { useNavigate } from 'react-router-dom';
import './styles/Button.css'
import PropTypes from 'prop-types';

function Button({text, color= 'white', destination}) {
  const navigate = useNavigate();

  const onClickNavigate = () => {
    navigate(destination)
  }

  return (
    <button onClick={onClickNavigate} className={`main-header__button main-header__button__`+color}>
        {text}
    </button>
  )
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default Button