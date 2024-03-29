import React from 'react'
import HomeBackGround from '../../assets/HomeBackground.jpg'
import HomeBackgroundMobile from '../../assets/home_mobile.jpg'
import Logo from "../../assets/Logo.svg"
// import LogoAreco from '../../assets/logo-areco.png'
import ttl from "../../assets/ttl.svg"
import { ButtonPrimary } from '../../components/Buttons/Buttons'
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom"

import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <header className="img-header-home">
                <img
                    alt="bg-will"
                    src={window.screen.width < 1101 ? HomeBackgroundMobile : HomeBackGround}
                />
                <div className="title-img-home">
                    <FormattedMessage id="Home.versiculo">{(message) => <p>{message}</p>}</FormattedMessage>
                    <FormattedMessage id="Home.cap">{(message) => <p>{message}</p>}</FormattedMessage>
                    <img src={Logo} alt="logo" />
                </div>
                <div className="ttl-logo-home">
                    <img
                        src={ttl}
                        alt="icon-ttl"
                    />
                </div>
            </header>
            <section className="content-home">
                <FormattedMessage id="Home.title">{(message) => <h1>{message}</h1>}</FormattedMessage>
                <FormattedMessage id="Home.content">{(message) => <p>{message}</p>}</FormattedMessage>
                <FormattedMessage id="Home.fecha">{(message) => <h3>{message}</h3>}</FormattedMessage>
                <Link to="/registro">
                    <ButtonPrimary className="btn-reserva">Reservá tu lugar</ButtonPrimary>
                </Link>
                <div className="organiza-home">
                    <p>Organiza:</p>
                    <p>Jesucristo Rey de Vida</p>
                    <p>Centro de Avivamiento Areco</p>
                </div>
            </section>
        </div>
    )
}

export default Home