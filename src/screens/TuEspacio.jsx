import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react';

function TuEspacio({user}) {
  const iconRef = useRef(null);

  useEffect(() => {
    if (iconRef.current) {
      // Asegurar que el elemento se inicializa correctamente
      window.customElements.whenDefined("animated-icons").then(() => {
        // Establecer atributos manualmente
        iconRef.current.setAttribute(
          "src",
          "https://animatedicons.co/get-icon?name=Register&style=minimalistic&token=be93a354-eb41-497f-bb52-cdf419e7d920"
        );
        iconRef.current.setAttribute("trigger", "click");
        iconRef.current.setAttribute("height", "200");
        iconRef.current.setAttribute("width", "200");

        // Configurar los atributos JSON de forma segura
        const attributes = {
          variationThumbColour: "#A4A7A9",
          variationName: "Gray Tone",
          variationNumber: 3,
          numberOfGroups: 1,
          strokeWidth: 1.5,
          backgroundIsGroup: true,
          defaultColours: {
            "group-1": "#0B7077FF",
            background: "#D2E6E4FF",
          },
        };

        iconRef.current.setAttribute("attributes", JSON.stringify(attributes));
      });
    }
  }, []);

  return (
    <div>
        <p>
            hola {user.displayName}
        </p>
        <animated-icons ref={iconRef}></animated-icons>
    </div>
  )
}

TuEspacio.propTypes = {
    user: PropTypes.object.isRequired,
}

export default TuEspacio 