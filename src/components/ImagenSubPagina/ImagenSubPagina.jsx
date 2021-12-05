
import React from 'react'
import fondo_subpaginas from '../../assets/fondo_subpaginas.jpg';

import './ImagenSubPagina.css'




const ImagenSubPagina = ({ children }) => {
    return (
        <div className="imagen-subpagina">
            <h1 className="registro-titulo">{children}</h1>
            <img src={fondo_subpaginas} alt="fondo-subpagina" />
        </div>
    )
}

export default ImagenSubPagina

