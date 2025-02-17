import './styles/Signup.css'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react"
import { auth } from '../config/app.js'
import LeftArrow from '../components/molecules/LeftArrow.jsx';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();
    const handleReturn = () => {
        navigate('/');
    }

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordVerREf = useRef(null);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const passwordVer = passwordVerREf.current.value;
        try{
            if (password != passwordVer){
                alert('Su contraseña debe ser idéntica.')
                return
            }
            const userCRedential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('Usuario registrado: ',userCRedential.user);
            alert('Registro exitoso.')
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
                <input className='signup_form_input' type="password" placeholder="Repita su contraseña" ref={passwordVerREf} required/>
                <button className='signup_form_button' type="submit">CREAR MI CUENTA</button>
            </section>
        </form>
        <img className='signup_rectangle' src="images/svg/signup-rectangle.svg"/>
        <img className='signup_rectangle' src="images/svg/signup-rectangle.svg"/>
    </section>
  )
}

export default SignUp