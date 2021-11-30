import React, { useState } from 'react'
import './NavBar.scss'

const NavBar = () => {


    const [sideBar, setSideBar] = useState(false)


    const showSideBar = () => {
        setSideBar(!sideBar)
    }

    return (
        <>
            <nav className={sideBar ? "nav nav-change-color" : "nav"}>
                <h4 className="logo">AltarDeAdoración</h4>
                <div className={sideBar ? "menu-btn open": "menu-btn"} onClick={showSideBar}>
                    <div className="menu-btn__burger"></div>
                </div> 
                    <ul className={sideBar ? 'nav__ul active': 'nav__ul'} >
                        <li className="nav__ul-li">Inicio</li>
                        <li className="nav__ul-li">Entradas</li>
                        <li className="nav__ul-li">Oradores</li>
                    </ul>
            </nav>
        </>
    )
}

export default NavBar