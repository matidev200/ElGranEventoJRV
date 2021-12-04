import React from "react"
import "./InputForm.scss"

const InputForm = ({placeholder, label, name, type, onChange, err}) => { 
    return(
        <>
            <label htmlFor={name}>{label}</label>
            <input  
            placeholder={err ? placeholder : `Debe ser un ${name} correcto`}
            name={name}
            type={type}
            onChange={onChange}
            className={err ? "" : "error"}/>
        </>
    )
}

export default InputForm