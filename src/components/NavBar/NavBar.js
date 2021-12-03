import React, { useState } from 'react'
import Logo from "../../assets/Logo.svg"
import './NavBar.scss'

const NavBar = () => {
    const [sideBar, setSideBar] = useState(false)
    const [underline, setUnderline] = useState({
        home: "is-active",
        reg: "",
        inv: "",
    })


    const showSideBar = () => {
        setSideBar(!sideBar)
    }
    const underlineHandle = (name) => setUnderline({ [name]: "is-active" })
    return (
        <header className="nav-position">
            <nav className={sideBar ? "nav nav-change-color" : "nav"}>
                <img
                    alt="logo"
                    className="logo-nav"
                    src={Logo} />
                <div className={sideBar ? "menu-btn open" : "menu-btn"} onClick={showSideBar}>
                    <div className="menu-btn__burger"></div>
                </div>
                <ul className={"font18 " + (sideBar ? 'nav__ul active' : 'nav__ul')} >
                    <li
                        onClick={() => underlineHandle("home")}
                        className={underline?.home}
                    ><a>HOME</a></li>
                    <li
                        onClick={() => underlineHandle("reg")}
                        className={underline?.reg}
                    ><a>REGISTRO</a></li>
                    <li
                        onClick={() => underlineHandle("inv")}
                        className={underline?.inv}
                    ><a>INVITADO</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar