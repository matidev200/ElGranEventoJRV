import React from 'react';
import './Error.css'
import { FormattedMessage } from "react-intl";
import LogoNegro from '../../assets/Logo-negro.svg' 
import {ButtonPrimary} from '../../components/Buttons/Buttons'
import {Link} from 'react-router-dom'

const Error = () => {

    return (
        
        <>
        <div className="relleno"></div>
        <div className="ticket-container ticket-error">
            <div className="ticket">
                <FormattedMessage id="Error.titulo">{(message) => <h3>{message}</h3>}</FormattedMessage>
                <FormattedMessage id="Error.descripcion">{(message) => <p>{message}</p>}</FormattedMessage>
                <img src={LogoNegro} alt="Logo-error" />
               <Link to="/">
               <ButtonPrimary  children="Volver a Inicio" className="btn-descarga-ticket"/> 
               </Link>
            </div>
        </div>
        </>
    )
}

export default Error
