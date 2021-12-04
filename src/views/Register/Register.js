import React, { useState } from 'react'
import './Register.scss'
import InputForm from '../../components/Input/InputForm'
import { ButtonPrimary } from '../../components/Buttons/Buttons'
import {postData} from '../../service/firebaseService'
import fondo_subpaginas from '../../assets/fondo_subpaginas.jpg'
import Logo from '../../assets/Logo.svg'

const Register = () => {
    const [err, setErr] = useState({
        nombre:true,
        apellido:true,
        mail:true,
        iglesia:true,
        telefono:true,
        err: false
    })
    
    const validation = (obj) => {
        setErr({
            nombre: obj.nombre.length > 3,
            apellido:  obj.apellido.length > 3,
            mail:  obj.mail.length > 3,
            iglesia:   obj.iglesia.length > 3,
            telefono: obj.telefono.length > 3,
        })
        return Object.values(err).some(e => e === false)
    }
    // const {err, validation} = useValidation();
    const [value, setValue] = useState({
        nombre: '',
        apellido: '',
        mail: '',
        iglesia: '',
        telefono: '',
    })


    const handleChange = (e) => {
        setValue({...value, 
        [e.target.name]: e.target.value})
    }
    
    const validation2 = (obj) => {
        const error = {
            nombre: obj.nombre.length > 3,
            apellido:  obj.apellido.length > 3,
            mail:  obj.mail.length > 3,
            iglesia:   obj.iglesia.length > 3,
            telefono: obj.telefono.length > 3,
        }
        return Object.values(error).some(e => e === false)
    }

    const sendData = (value) => {
        console.log(value)
        validation(value)
        const val2 = validation2(value)
       
        if(val2) {
           console.log(val2)
        
        } else postData(value)
    }

    return (
        <>
        <div className="relleno"></div>
        
        <div className="imagen-subpagina">
             <h1 className="registro-titulo">Registro</h1>
            <img src={fondo_subpaginas} alt="fondo-subpagina" />
        </div>

        <div className="register-info">
            <img src={Logo} alt="logo"/>
            <p>Queremos que todos puedan disfrutar este tiempo con nosotros, por eso la entrada es libre y gratuita. Para poder obtenerla solo debes llenar el siguiente formulario y descargar el código QR. Te recordamos que la iglesia tiene capacidad límitada, por lo que te recomendamos sacar tu entrada lo antes posible para asegurarte tu lugar.</p>
        </div>

        <div className="form-container">  
            <div className="relleno"></div>
            <InputForm
            label="Nombre" 
            placeholder="Nombre"
            name="nombre"
            type="text"
            onChange={handleChange}
            err={err.nombre}
            />
            <InputForm 
           
            label="Apellido"
            placeholder="Apellido"
            name="apellido"
            type="text"
            onChange={handleChange}
            err={err.apellido}
            />
            <InputForm 
            
            label="Telefono"
            placeholder="Telefono"
            name="telefono"
            type="number"
            onChange={handleChange}
            err={err.telefono}
            />
            <InputForm
            
            label="Mail" 
            placeholder="Mail"
            name="mail"
            type="mail"
            onChange={handleChange}
            err={err.mail}
            />
            <InputForm 
            label="Iglesia"
            placeholder="Iglesia"
            name="iglesia"
            type="text"
            onChange={handleChange}
            err={err.iglesia}
            />
            <ButtonPrimary onClick={() => sendData(value)} className="btn-register">
                Reservá tu entrada
            </ButtonPrimary>    
        </div>

        <div className="maps-container">
            <div className="maps">maps</div>
            <ul>
                <li><b>Iglesia Jesucristo Rey de Vida</b></li>
                <li>Esquina Mitre y Travi - Belén de Escobar</li>
                <li>Viernes 18 de diciembre - 16:30hs</li>
                <li>0348 - 4313 - 655</li>
            </ul>
        </div>
    </>
    )
}

export default Register