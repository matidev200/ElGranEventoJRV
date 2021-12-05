import React from "react"
import "./InputForm.scss"

const InputForm = ({placeholder, label, name, type, onChange, err, className}) => { 
    return(
        <div className="input-container">
            <label className="input-label" htmlFor={name}>{label}</label>
            <input  
            placeholder={
                err ? placeholder : `Debe ser un ${name} correcto`}
                name={name}
                type={type}
                onChange={onChange}
                className={err ? "input" : "error"}/>
        </div>
    )
}

export default InputForm