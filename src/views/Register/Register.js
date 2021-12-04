import React, { useState } from 'react'
import './Register.scss'
import InputForm from '../../components/Input/InputForm'
import { ButtonPrimary } from '../../components/Buttons/Buttons'
import {postData} from '../../service/firebaseService'

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
            <ButtonPrimary onClick={() => sendData(value)}>
                Reservar Entrada
            </ButtonPrimary>    
        </>
    )
}

export default Register