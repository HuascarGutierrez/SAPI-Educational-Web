import LeftArrow from "../components/molecules/LeftArrow"
import { useState, useRef } from "react";
import { useNavigate /**useSearchParams */ } from "react-router-dom";
import { auth } from "../config/app";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { ClipLoader } from "react-spinners";
import { handleErrorNoti, handleSuccess } from "../config/alerts";

function Login() {
    const [waiting, setWaiting] = useState(false);
    const navigate = useNavigate();
    const handleReturn = () => {
        navigate('../');
    }

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = async(e) => {
        setWaiting(true)
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        try{
            await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if(userCredential.user.emailVerified){
                    handleSuccess({texto: "Inicio de sesión exitoso."})
                    navigate('/');
                } else {
                    signOut(auth)
                    handleErrorNoti({texto: "Verifica el SPAM de tu correo para continuar.", title: 'Verifica tu correo', color: '#ccccff'})
                }
            })
            
        } catch(error){
            handleErrorNoti(`error en el registro: ${error.message}`)
        }
        setWaiting(false)
    }

  return (
    <section className="signup">
            <button onClick={handleReturn} className='signup_volver'>
                <LeftArrow color={'var(--color-green-light)'} size={'2em'}/>
                Volver
            </button>
            <form className="signup_form" onSubmit={handleSubmit}>
                <h2 className='signup_form_h2'>Inicia Sesion</h2>
                <p className='signup_form_p'>Entra a los mejores recursos<br/> en el línea.</p>
                <section className='signup_form_inputs'> 
                    <input className='signup_form_input'  type="email" placeholder="tucorreo@email.com" ref={emailRef} required/>
                    <input className='signup_form_input' type="password" placeholder="Contraseña" ref={passwordRef} required/>
                    {
                        waiting? <div style={{marginInline: 'auto'}}><ClipLoader color="var(--color-green-primary)" size={40}/></div> : <button className='signup_form_button' type="submit">INGRESAR</button>
                    }
                </section>
            </form>
            <img className='signup_rectangle' src="images/svg/signup-rectangle.svg"/>
            <img className='signup_rectangle' src="images/svg/signup-rectangle.svg"/>
    </section>
  )
}

export default Login