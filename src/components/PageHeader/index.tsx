import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

interface PageHeaderProps {
    title: string,
    back: string,
    description?: string,
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
        <div className="top-bar-container">
            <Link to={props.back}>
                <FontAwesomeIcon icon={faLongArrowAltLeft} className="back-icon" />
            </Link>
            <img src={logoImg} alt="Classy"/>
        </div>

        <div className="header-content">
            <strong>{props.title}</strong>
            {props.description && <p>{props.description}</p>}
            {props.children}
        </div>

    </header>
    );
}

export default PageHeader;