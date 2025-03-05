import './styles/Presentation.css'

function Presentation() {
  return (
    <div className="presentation">
      <section className='presentation__rectangle'>
        <img className='presentation__lines' src="images/svg/presentationLines.svg"/>
        <h3 className='presentation__phrase'>
          Únete a <span><div className='presentation__rectangle__long'></div>SAPI</span><br /> y aprende con nosotros  
        </h3>
        <p className='presentation__text'>Somos una academia enfocada<br/> en ayudar a estudiantes<br/> con dificultades en materias STEM.</p>
      </section>
      <section>
        <img className="presentation__image presentation__image__man" src="images/velozbuho.webp" alt="presentation-man" />
        <img className="presentation__image presentation__image__bar" src="images/presentation-bar.webp" alt="presentation-bar"/>
      </section>

      <section className="presentation__buttonSection">
        <button className="presentation__buttonSection__button">
          <svg className="presentation__buttonSection__svg" viewBox="0 0 150 150">
            <path
              id="circlePath"
              d="M 75, 75 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
            />
            <text className="presentation__buttonSection__buttonTextExplore">
              <textPath href="#circlePath">
                EXPLORA MÁS - EXPLORA MÁS -
              </textPath>
            </text>
          </svg>
          <img
            className="presentation__buttonSection__button__play"
            src="images/svg/presentation-play.svg"
            alt=""
          />
        </button>
      </section>

      <button className='presentation__button'>Explora el lugar</button>
    </div>
  )
}

export default Presentation