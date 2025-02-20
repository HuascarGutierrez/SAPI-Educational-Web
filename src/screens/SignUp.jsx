import './styles/Signup.css'
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useState, useRef } from "react"
import { auth } from '../config/app.js'
import LeftArrow from '../components/molecules/LeftArrow.jsx';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import Swal from 'sweetalert2';

function SignUp() {
    const [waiting, setWaiting] = useState(false)

    const handleAlert = (text) => {
        Swal.fire({
            title: 'Cuidado',
            text: text,
            icon: 'question',
            iconColor: 'var(--color-orange-secondary)',
            confirmButtonText: 'Opps, Oki',
            background: 'var(--color-white)',
            color: 'var(--color-orange-secondary)',
            confirmButtonColor: 'var(--color-orange-secondary)',
        })
    }

    const handleSuccess = () => {
        Swal.fire({
            title: 'Verifica tu correo',
            text: 'Tu usuario ha sido creado, verifica tu correo para continuar',
            icon: 'info',
            iconColor: '#ffff00',
            confirmButtonText: 'Continuar',
            cancelButtonText: 'Cancelar',
            background: 'var(--color-gray-medium)',
            color: 'var(--color-green-primary)',
            confirmButtonColor: 'var(--color-green-primary)',
        })
        
    }

    const handleErrorNoti = (texto) => {
        Swal.fire({
            title: 'Error',
            text: texto,
            icon: 'warning',
            iconColor: '#ff0000',
            confirmButtonText: 'OK',
            background: 'var(--color-blue)',
            color: '#ff0000',
            confirmButtonColor: '#ff0000',
        })
    }

    const navigate = useNavigate();
    const handleReturn = () => {
        navigate('../');
    }

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordVerREf = useRef(null);

    const handleSubmit = async(e) => {
        setWaiting(true)

        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const passwordVer = passwordVerREf.current.value;
        try{
            if (password != passwordVer){
                handleAlert('Su contraseña debe ser idéntica');
                return
            }
            //const userCRedential = await createUserWithEmailAndPassword(auth, email, password);
            await createUserWithEmailAndPassword(auth, email, password);
            await sendEmailVerification(auth.currentUser)

            //console.log('Usuario registrado: ',userCRedential.user);
            handleSuccess();
            navigate('/')
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
            <h2 className='signup_form_h2'>Crea Una Cuenta</h2>
            <p className='signup_form_p'>Inicia la experiencia donde aprenderás nuevas cosas junto con SAPI</p>
            <section className='signup_form_inputs'> 
                <input className='signup_form_input'  type="email" placeholder="tucorreo@email.com" ref={emailRef} required/>
                <input className='signup_form_input' type="password" placeholder="Contraseña" ref={passwordRef} required/>
                <input className='signup_form_input' type="password" placeholder="Repita su contraseña" ref={passwordVerREf} required/>
                {
                    waiting ? <div style={{marginInline: 'auto'}}><ClipLoader color="var(--color-green-primary)" size={40}/></div> :
                     <button className='signup_form_button' type="submit">CREAR MI CUENTA</button>
                }
            </section>
        </form>
        <img className='signup_rectangle' src="images/svg/signup-rectangle.svg"/>
        <img className='signup_rectangle' src="images/svg/signup-rectangle.svg"/>
    </section>
  )
}

export default SignUp