import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
        <div className="top-bar-container">
            <Link to="/">
                <FontAwesomeIcon icon={faLongArrowAltLeft} className="back-icon" />
            </Link>
            <img src={logoImg} alt="Classy"/>
        </div>

        <div className="header-content">
            <strong>{props.title}</strong>
        </div>

    </header>
    );
}

export default PageHeader;