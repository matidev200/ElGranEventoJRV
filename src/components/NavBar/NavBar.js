import React, { useState } from 'react'
import Logo from "../../assets/Logo.svg"
import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [sideBar, setSideBar] = useState(false)
    const [nav, seNav] = useState(false)
    const [underline, setUnderline] = useState({
        home: "is-active",
        reg: "",
        inv: "",
    })
    const changeBg = () => {
        if (window.scrollY >= 100) {
            seNav(true)
        } else {
            seNav(false)
        }
    }
    window.addEventListener('scroll', changeBg)

    const showSideBar = () => {
        setSideBar(!sideBar)
    }
    const underlineHandle = (name) => {
        setUnderline({ [name]: "is-active" })
        setSideBar(false)

    }

    return (
        <header className="nav-position">
            <nav className={(sideBar ? "nav nav-change-color" : "nav") + (nav ? " bg-change" : "")}>
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
                    ><Link to="/">HOME</Link></li>
                    <li
                        onClick={() => underlineHandle("reg")}
                        className={underline?.reg}
                    ><Link to="/registro">REGISTRO</Link></li>
                    <li
                        onClick={() => underlineHandle("inv")}
                        className={underline?.inv}
                    ><Link to="/invitado">INVITADO</Link></li>


                </ul>
            </nav>
        </header>
    )
}

export default NavBar