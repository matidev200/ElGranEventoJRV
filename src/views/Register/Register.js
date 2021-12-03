import React from 'react'
import './Register.scss'
import InputForm from '../../components/Input/InputForm'
import { ButtonPrimary } from '../../components/Buttons/Buttons'
import {postData} from '../../service/firebaseService'

const Register = () => {
    return (
        <>  
            
            <InputForm
            label="Nombre" 
            placeholder="Nombre"
            name="Nombre"
            type="text"
            />
            <InputForm 
            label="Apellido"
            placeholder="Apellido"
            name="Apellido"
            type="text"
            />
            <InputForm 
            label="Telefono"
            placeholder="Telefono"
            name="Telefono"
            type="number"
            />
            <InputForm
            label="Mail" 
            placeholder="Mail"
            name="Mail"
            type="mail"
            />
            <InputForm 
            label="Iglesia"
            placeholder="Iglesia"
            name="Iglesia"
            type="text"
            />

            <ButtonPrimary onClick={postData}>
                Reservar Entrada
            </ButtonPrimary>
            
           
        </>
    )
}

export default Register