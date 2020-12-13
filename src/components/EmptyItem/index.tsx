import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './styles.css';

const EmptyItem = () => {

    return (                
    <article className="empty-item">
        <header>
            <div>
                <p><FontAwesomeIcon icon={faSearch} className="search-icons" /><strong>Ops! Não encontrei esse classy...</strong></p>
            </div>
        </header>
        <div className="empty-description">
            <span>Ou não existe tasks na sua fila, pode comemorar! </span>
        </div>
        <footer>
            <p>Procure outra turma por seu <strong>ID</strong> ou retorne á <strong>Home</strong></p>
        </footer>
    </article>
    )
}

export default EmptyItem;
