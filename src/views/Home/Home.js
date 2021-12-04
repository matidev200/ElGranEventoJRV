import React from 'react'
import HomeBackGround from '../../assets/HomeBackground.jpg'
import HomeBackgroundMobile from '../../assets/home_mobile.jpg'
import Logo from "../../assets/Logo.svg"
import ttl from "../../assets/ttl.svg"
import { ButtonPrimary } from '../../components/Buttons/Buttons'
import { FormattedMessage } from "react-intl";
import './Home.scss'

const Home = () => {
    const view = () => window.screen.width < 1101
    console.log(view())
    return (
        <div className="home">
            <header className="img-header-home">
                <img
                    alt="bg-will"
                    src={view() < 1101 ? HomeBackgroundMobile : HomeBackGround}
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
                <ButtonPrimary className="btn-reserva">Reservá tu lugar</ButtonPrimary>
                <div className="organiza-home">
                    <p>Organiza:</p>
                    <p>Jesucristo Rey de Vida</p>
                </div>
            </section>
        </div>
    )
}

export default Home