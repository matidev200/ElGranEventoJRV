import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-row">
                <ul className="footer__ul">
                    <li className="footer__ul-title">Redes Sociales</li>
                    <li><a href="https://www.instagram.com" target="_BLANK" rel="noreferrer">Instagram</a></li>
                    <li ><a href="https://www.facebook.com" target="_BLANK" rel="noreferrer">Facebook</a></li>
                    <li ><a href="https://www.youtube.com" target="_BLANK" rel="noreferrer">Youtube</a></li>
                </ul>
                <ul className="footer__ul">
                    <li className="footer__ul-title">Contacto</li>
                    <li >0348-4313-655</li>
                    <li >0348-4313-655</li>
                    
                </ul>
            </div>

            <div className="footer-row">
                <ul className="footer__ul">
                <li className="footer__ul-title">Dirección</li>
                    <li >Dr. Travi  697</li>
                </ul>
                <ul className="footer__ul">
                    <li className="footer__ul-title">Redes Sociales</li>
                    <li >Instagram</li>
                    <li >Facebook</li>
                    <li >Youtube</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer