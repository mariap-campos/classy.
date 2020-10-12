import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing3.svg';

import './styles.css';

function Landing(){
    return (
    <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div className="logo-container">
                <img src={logoImg} alt="Classy."/>
                {/* <h3>Sua experiência academica</h3> */}
                <h3>Rápida. Simples. Organizada</h3>
            </div>
            <img src={landingImg} alt="" className="heroImg"/>

            <div className="buttons-container">
                <a href="" className="student">Aluno</a>
                <a href="" className="admin">Admin</a>
            </div>

            <span className="total-connections">
                Sua vida academica começa aqui! <img src="" alt=""/>
            </span>
        </div>
    </div>
    )
}

export default Landing;