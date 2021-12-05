import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">

            
                <ul className="footer__ul">
                    <li className="footer__ul-title">Redes Sociales</li>
                    <li><a href="https://www.instagram.com/iglesiajrvcentral_escobar/" target="_BLANK" rel="noreferrer">Instagram</a></li>
                    <li ><a href="https://www.facebook.com/jesucristo.reydevida" target="_BLANK" rel="noreferrer">Facebook</a></li>
                    <li ><a href="https://www.youtube.com/c/JesucristoReydeVidaCENTRAL" target="_BLANK" rel="noreferrer">Youtube</a></li>
                </ul>

                <ul className="footer__ul">
                    <li className="footer__ul-title">Contacto</li>
                    <li>0348-4313-655</li>
                    <li><a href="mailto:jrvcentralescobar@gmail.com" target="_blank" rel="noreferrer">Soporte</a></li>
                    
                </ul>
           

            
                <ul className="footer__ul">
                    <li className="footer__ul-title">Dirección</li>
                     <li >Dr. Travi  697 <br />  Belén de Escobar</li>
                </ul>

                
        </footer>
    )
}

export default Footer