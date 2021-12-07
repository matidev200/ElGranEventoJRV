import React from 'react'
import whs from '../../assets/WhatsApp-logo.svg'
import youtube from '../../assets/Youtube.svg'
import Facebook from '../../assets/Facebook.svg'
import Instagram from '../../assets/Instagram.svg'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">

            
                <ul className="footer__ul">
                    <li className="footer__ul-title">Redes Sociales</li>
                    <li><img src={Instagram} alt="whs" /><a href="https://www.instagram.com/iglesiajrvcentral_escobar/" target="_BLANK" rel="noreferrer">Instagram</a></li>
                    <li ><img src={Facebook} alt="whs" /><a href="https://www.facebook.com/jesucristo.reydevida" target="_BLANK" rel="noreferrer">Facebook</a></li>
                    <li ><img src={youtube} alt="whs" /><a href="https://www.youtube.com/c/JesucristoReydeVidaCENTRAL" target="_BLANK" rel="noreferrer">Youtube</a></li>
                </ul>

                <ul className="footer__ul">
                    <li className="footer__ul-title">Contacto</li>
                    <li><img src={whs} alt="whs" /><p>0348-4313-655</p></li>
                    {/* <li><img src={whs} alt="whs" /><a href="https://wa.me/03484313655" target="_blank" rel="noreferrer">0348-4313-655</a></li> */}
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