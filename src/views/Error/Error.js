import React from 'react';
import './Error.css'
import { FormattedMessage } from "react-intl";
import LogoNegro from '../../assets/Logo-negro.svg' 
import {ButtonPrimary} from '../../components/Buttons/Buttons'
import {useParams} from 'react-router-dom'

const Error = () => {

    

    console.log(useParams());

    return (
        
        <>
        <div className="relleno"></div>
        <div className="ticket-container ticket-error">
            <div className="ticket">
                <FormattedMessage id="Error.titulo">{(message) => <h3>{message}</h3>}</FormattedMessage>
                <FormattedMessage id="Error.descripcion">{(message) => <p>{message}</p>}</FormattedMessage>
                <img src={LogoNegro} alt="Logo-error" />
                <ButtonPrimary  children="Volver a Inicio" className="btn-descarga-ticket"/> 
            </div>
        </div>
        </>
    )
}

export default Error
