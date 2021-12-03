import React from "react"
import "./InputForm.scss"

const InputForm = ({placeholder, label, name, type}) => { 
    return(
        <>
            <label htmlFor={name}>{label}</label>
            <input  
            placeholder={placeholder}
            name={name}
            type={type}/>
        </>
    )
}

export default InputForm