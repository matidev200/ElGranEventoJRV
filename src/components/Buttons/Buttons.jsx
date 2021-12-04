import React from "react"
import "./Buttons.scss"

export const ButtonPrimary = ({children, onClick}) => {

    return (
        <>
            <button className="button" onClick={onClick}>{children}</button>
        </>
    )
}

export const ButtonSecondary = ({children}) => {
    return (
        <>
            <button>{children}</button>
        </>
    )
}