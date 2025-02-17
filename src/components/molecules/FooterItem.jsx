import PropTypes from 'prop-types'
import './styles/FooterItem.css'

function FooterItem({imageUrl, text}) {
  return (
    <div className='footerItem'>
        <img src={imageUrl} alt={text} />
        <p>{text}</p>
    </div>
  )
}

FooterItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default FooterItem