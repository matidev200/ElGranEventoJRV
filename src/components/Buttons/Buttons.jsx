import React from "react"
import "./Buttons.scss"

export const ButtonPrimary = ({ children, onClick, className }) => {

    return (
        <div className={"btnPrimary " + (className)}>
            <button onClick={onClick}>{children}</button>
        </div>
    )
}

export const ButtonSecondary = ({ children }) => {
    return (
        <>
            <button>{children}</button>
        </>
    )
}