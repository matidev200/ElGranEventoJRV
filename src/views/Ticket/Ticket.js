import React, { useEffect, useState } from 'react'
import {ButtonPrimary} from '../../components/Buttons/Buttons';
import { FormattedMessage } from "react-intl";
import Logo from "../../assets/Logo-negro.svg";
import './TIcket.css';
import qr from '../../assets/qr.png'
import {useParams} from 'react-router-dom';
import {getNameById} from '../../service/firebaseService'

const Ticket = () => {

    const [usuario, setUsuario] = useState({})
    const {id} = useParams();
   

    useEffect(() => {
       getNameById(id, setUsuario)
    }, [id])

    return (

        <>
        <div className="relleno"></div>
        <div className="ticket-container">
            
            <div className="ticket">
                <h1>Ticket De Ingreso</h1>
                <h3>{usuario.nombre} {usuario.apellido}</h3>
                <FormattedMessage id="Ticket.descripcion">{(message) => <p>{message}</p>}</FormattedMessage>
                <img className="ticket-qr" src={qr} alt="QrLogo"/>
                <ButtonPrimary className="btn-descarga-ticket">Descarga tu entrada</ButtonPrimary>
                <img className="ticket-logo" src={Logo} alt="Logo"/>
                <ButtonPrimary className="volver-inicio-ticket">Volver al inicio</ButtonPrimary>
            </div>
        </div>
        </>
    )
}

export default Ticket
