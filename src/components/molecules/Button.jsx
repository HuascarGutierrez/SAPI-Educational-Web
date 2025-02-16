
import './styles/Button.css'
import PropTypes from 'prop-types';

function Button({text, color= 'white'}) {
  return (
    <button className={`main-header__button main-header__button__`+color}>
        {text}
    </button>
  )
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button