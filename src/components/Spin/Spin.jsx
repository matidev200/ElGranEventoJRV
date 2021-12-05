import React, { useState } from 'react';
import './Spin.scss';

const Spin = () => {

    



    return (
        <div className="spinner-container">
            <div className="loader">
            <svg className="spin-svg" viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className="load one" cx="60" cy="60" r="40" />
                <circle className="load two" cx="60" cy="60" r="40" />
                <circle className="load three" cx="60" cy="60" r="40" />
                <g>
                <circle className="point one" cx="45" cy="70" r="5" />
                <circle className="point two" cx="60" cy="70" r="5" />
                <circle className="point three" cx="75" cy="70" r="5" />
                </g>
            </svg>
            </div>
        </div>
    )
}

export default Spin
