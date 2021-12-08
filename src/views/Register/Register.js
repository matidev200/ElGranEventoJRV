import React, { useState } from 'react'
import './Register.css'
import InputForm from '../../components/Input/InputForm'
import { ButtonPrimary } from '../../components/Buttons/Buttons'
import { postData } from '../../service/firebaseService'
import Logo from '../../assets/Logo.svg'
import ImagenSubPagina from '../../components/ImagenSubPagina/ImagenSubPagina'
import { FormattedMessage } from "react-intl";
import Spin from '../../components/Spin/Spin';
import { useHistory } from 'react-router-dom'



const Register = () => {
    const history = useHistory();
    const [spinning, setSpinning] = useState(false)
    const [err, setErr] = useState({
        nombre: true,
        apellido: true,
        correo: true,
        iglesia: true,
        telefono: true,
        err: false
    })
    const [datosRepetidosError, setDatosRepetidosError] = useState(false)

    const validation = (obj) => {
        setErr({
            nombre: obj.nombre.length > 3,
            apellido: obj.apellido.length > 3,
            correo: obj.correo.length > 3,
            iglesia: obj.iglesia.length > 3,
            telefono: obj.telefono.length > 3,
        })
        return Object.values(err).some(e => e === false)
    }
    // const {err, validation} = useValidation();
    const [value, setValue] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        iglesia: '',
        telefono: '',
    })


    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const validation2 = (obj) => {
        const error = {
            nombre: obj.nombre.length > 3,
            apellido: obj.apellido.length > 3,
            correo: obj.correo.length > 3,
            iglesia: obj.iglesia.length > 3,
            telefono: obj.telefono.length > 3,
        }
        return Object.values(error).some(e => e === false)
    }



    const handleSpinning = () => {
        setSpinning(true)
    }



    const sendData = async (value) => {

        validation(value)
        const val2 = validation2(value)

        if (val2) {
            return null

        }
        else {
            handleSpinning()
            const id = await postData(value, setSpinning)
            if (Array.isArray(id) && id[1] === false) {
                history.replace(`/ticket/${id}`)
            }
            else if (Array.isArray(id) && id[1]) {
                history.replace(`/error/${id}`)
            }
            else {
                setDatosRepetidosError(true);
            }
        }
    }

    return (
        <>



            <div className="relleno"></div>

            <ImagenSubPagina>Registro</ImagenSubPagina>

            <div className="register-info">
                <img src={Logo} alt="logo" className="register-logo" />
                <FormattedMessage id="Register.descripcion">{(message) => <p className="register-description">{message}</p>}</FormattedMessage>
            </div>

            <div className="form-container">
                <div className="relleno"></div>
                <div className="input-row">

                    <InputForm
                        label="Nombre"
                        placeholder="Nombre"
                        name="nombre"
                        type="text"
                        onChange={handleChange}
                        err={err.nombre}
                    />
                    <InputForm

                        label="Apellido"
                        placeholder="Apellido"
                        name="apellido"
                        type="text"
                        onChange={handleChange}
                        err={err.apellido}
                    />
                </div>

                <div className="input-row">


                    <InputForm
                        label="Telefono"
                        placeholder="Telefono"
                        name="telefono"
                        type="number"
                        onChange={handleChange}
                        err={err.telefono}
                    />
                    <InputForm

                        label="Correo"
                        placeholder="Correo"
                        name="correo"
                        type="mail"
                        onChange={handleChange}
                        err={err.correo}
                    />
                </div>
                <div className="input-row">

                    <InputForm
                        label="Iglesia"
                        placeholder="Iglesia"
                        name="iglesia"
                        type="text"
                        onChange={handleChange}
                        err={err.iglesia}
                    />



                </div>
                {datosRepetidosError ? <label className="error-repetido">Los datos ya fueron ingresados previamente</label> : null}
                <ButtonPrimary onClick={() => sendData(value)} className="btn-register">
                    Reservá tu entrada
                </ButtonPrimary>

            </div>
            {spinning ? <Spin /> : null}
            <div className="maps-section">
                <div className="maps-container">
                    <div className="maps">
                        {window.screen.width > 1101 ?
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d411.7571656996549!2d-58.79279775012304!3d-34.34901910237332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb61b0c5152471%3A0x6dca2cd3e447d445!2sJesucristo%20Rey%20de%20Vida!5e0!3m2!1sen!2sar!4v1638842473095!5m2!1sen!2sar" width="500" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="map"></iframe>
                            :
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d411.7571656996549!2d-58.79279775012304!3d-34.34901910237332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb61b0c5152471%3A0x6dca2cd3e447d445!2sJesucristo%20Rey%20de%20Vida!5e0!3m2!1sen!2sar!4v1638842473095!5m2!1sen!2sar" width="300" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="mobile-map"></iframe>
                        }
                    </div>
                    <ul>
                        <FormattedMessage id="Register.direccion">{(message) => <li><b>{message}</b></li>}</FormattedMessage>
                        <FormattedMessage id="Register.calles">{(message) => <li>{message}</li>}</FormattedMessage>
                        <FormattedMessage id="Register.fecha">{(message) => <li>{message}</li>}</FormattedMessage>
                        <FormattedMessage id="Register.numero">{(message) => <li>{message}</li>}</FormattedMessage>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Register