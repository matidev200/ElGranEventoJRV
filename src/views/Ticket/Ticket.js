import React, { useEffect, useState } from 'react'
import { ButtonPrimary } from '../../components/Buttons/Buttons';
import { FormattedMessage } from "react-intl";
import Logo from "../../assets/Logo-negro.svg";
import qr from '../../assets/qr.png'
import './TIcket.css';
import { useParams, Link } from 'react-router-dom';
import { getNameById } from '../../service/firebaseService'
import { PDFDownloadLink } from '@react-pdf/renderer'
import TicketPdf from '../Ticket/TicketPdf'

const Ticket = () => {

    const [usuario, setUsuario] = useState({})
    const { id } = useParams();


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
                    <img className="ticket-qr" src={qr} alt="QrLogo" />
                    <PDFDownloadLink
                        document={<TicketPdf nombre={usuario.nombre} apellido={usuario.apellido} />}
                        fileName="Altar-de-Adoracion.pdf"
                    >
                        <ButtonPrimary className="btn-descarga-ticket">Descarga tu entrada</ButtonPrimary>
                    </PDFDownloadLink>
                    <img className="ticket-logo" src={Logo} alt="Logo" />
                    <Link to="/">
                        <ButtonPrimary className="volver-inicio-ticket">Volver al inicio</ButtonPrimary>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Ticket
