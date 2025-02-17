import LeftArrow from "../components/molecules/LeftArrow"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/app";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
    const navigate = useNavigate();
    const handleReturn = () => {
        navigate('../');
    }

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        try{
            await signInWithEmailAndPassword(auth, email, password)
            .then((userCRedential) => {
                const user = userCRedential.user;
                console.log('Usuario logeado: ', user);
            })
            alert('login exitoso.');
            navigate('/');
        } catch(error){
            console.error('error en el registro: ',error.message)
        }
    }

  return (
    <section className="signup">
            <button onClick={handleReturn} className='signup_volver'>
                <LeftArrow color={'var(--color-green-light)'} size={'2em'}/>
                Volver
            </button>
            <form className="signup_form" onSubmit={handleSubmit}>
                <h2 className='signup_form_h2'>Crea Una Cuenta</h2>
                <p className='signup_form_p'>Inicia la experiencia donde aprenderás nuevas cosas junto con SAPI</p>
                <section className='signup_form_inputs'> 
                    <input className='signup_form_input'  type="email" placeholder="tucorreo@email.com" ref={emailRef} required/>
                    <input className='signup_form_input' type="password" placeholder="Contraseña" ref={passwordRef} required/>
                    <button className='signup_form_button' type="submit">INGRESAR</button>
                </section>
            </form>
            <img className='signup_rectangle' src="images/svg/signup-rectangle.svg"/>
            <img className='signup_rectangle' src="images/svg/signup-rectangle.svg"/>
    </section>
  )
}

export default Login