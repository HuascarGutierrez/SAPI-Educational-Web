import './styles/Presentation.css'

function Presentation() {
  return (
    <div className="presentation">
      <img className='presentation__lines' src="images/svg/presentationLines.svg"/>
      <span className='presentation__span'>No Pares de Estudiar</span>
      <h3 className='presentation__phrase'>AYUDANOS A<br/> CUMPLIR TUS METAS</h3>
      <section>
        <div className='presentation__rectangle__long'></div>
        <div className='presentation__rectangle__first'></div>
        <div className='presentation__rectangle__second'></div>
      </section>
      <section>
        <img className="presentation__image presentation__image__man" src="images/presentation-man.webp" alt="presentation-man" />
        <img className="presentation__image presentation__image__calendar" src="images/presentation-calendar.webp" alt="presentation-calendar" />
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