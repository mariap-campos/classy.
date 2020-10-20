import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing4.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faUser, faUserCog } from '@fortawesome/free-solid-svg-icons'

import './styles.css';

function Landing(){
    return (
    <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div className="logo-container">
            <img src={logoImg} alt="Classy."/>
                {/* <h3>Sua experiência academica</h3> */}
                <h2>Rápida. Simples. Organizada</h2>
            </div>
            <img src={landingImg} alt="" className="heroImg"/>

            <div className="buttons-container">  
                <Link to="/agenda/tasks" className="student">
                    <FontAwesomeIcon icon={faUser} className="button-icon" />
                    Aluno
                </Link>
                <Link to="/cadastro" className="admin">
                    <FontAwesomeIcon icon={faUserCog} className="button-icon" />
                    Admin
                </Link>
            </div>

            <div className="span-description">
                <h3>Sua vida academica começa aqui! <FontAwesomeIcon icon={faGraduationCap} /></h3>
            </div>
        </div>
    </div>
    )
}

export default Landing;