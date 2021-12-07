import React from 'react'
import ImagenSubPagina from '../../components/ImagenSubPagina/ImagenSubPagina'
import { ButtonPrimary } from '../../components/Buttons/Buttons';
import { FormattedMessage } from "react-intl";
import { Link } from 'react-router-dom'
import Logo from "../../assets/Logo.svg"
import will from "../../assets/will.jpeg"
import berna from "../../assets/berna2.jpeg"
import ttl from "../../assets/tomatulugar_isologo.svg"
import './Invitados.css';

const Oradores = () => {

    return (
        <>
            <div className="relleno"></div>
            <img src={Logo} alt="logo-icon" className="logo-inv" />
            <ImagenSubPagina>INVITADOS</ImagenSubPagina>

            <section className="inv-section">
                <div className="header-invitado">
                    <FormattedMessage id="Invitado.name">{(message) => <h1 className="div1">{message}</h1>}</FormattedMessage>
                    <FormattedMessage id="Invitado.bio">{(message) => <p className="div2">{message}</p>}</FormattedMessage>
                    <img src={will} className="div3" alt="Will" />
                </div>
            </section>
            <section className="inv-section-two">
                <div className="header-sub-bio">
                    <img src={ttl} className="div4" alt="ttl" />
                    <FormattedMessage id="Invitado.ttl">{(message) => <h1 className="div5">{message}</h1>}</FormattedMessage>
                    <FormattedMessage id="Invitado.ttlBio">{(message) => <p className="div6">{message}</p>}</FormattedMessage>
                </div>
            </section>
            <section className="inv-section gray-img">
                <div className="header-invitado">
                    <FormattedMessage id="Invitado.name2">{(message) => <h1 className="div1">{message}</h1>}</FormattedMessage>
                    <FormattedMessage id="Invitado.bio2">{(message) => <p className="div2">{message}</p>}</FormattedMessage>
                    <img src={berna} className="div3 " alt="Berna" />
                </div>
            </section>
            <section className="content-home">
                <Link to="/registro">
                    <ButtonPrimary className="btn-reserva">Reservá tu lugar</ButtonPrimary>
                </Link>
                <div className="organiza-home">
                    <p>Organiza:</p>
                    <p>Jesucristo Rey de Vida</p>
                    <p>Centro de Avivamiento Areco</p>
                </div>
            </section>

        </>
    )
}

export default Oradores