import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

const TaskItem = () => {
    const [showSquare, setShowSquare] = React.useState(false)
    const [showChecked, setShowChecked] = React.useState(true)
    const onClick = () => {
        setShowSquare(!showSquare)
        setShowChecked(!showChecked)
    }

    return (                
    <article className="task-item">
        <header>
            <div>
                <p><strong>Questionário 2</strong></p>
                <p>
                    <span>Implementação Orientada a Objetos</span>
                </p>
            </div>
        </header>
        <div className="task-description">
            
            <p><span>Descrição: </span>Realizar o questionário disponivel na barra de tarefas do Microsoft Teams da disciplina</p>
        </div>
        <footer>
            <p>
                Prazo: <strong>20/10/2020</strong>
            </p>
            <i onClick={onClick}>
                { showSquare ? <Square /> : null }
                { showChecked ? <Checked /> : null }
            </i>
        </footer>
    </article>
    )
}

const Checked = () => (
    <FontAwesomeIcon icon={faSquare} className="square-icon is--unchecked"/>
)
const Square = () => (
    <FontAwesomeIcon icon={faCheckSquare} className="check-icon is--checked"/>
)

export default TaskItem;
