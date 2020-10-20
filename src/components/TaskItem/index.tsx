import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

export interface Task {
        name: string,
        materia: string,
        descricao: string,
        prazo: string,
        classId: number,
        id: number
}

interface TaskItemProps {
    task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
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
                <p><strong>{task.name}</strong></p>
                <p>
                    <span>{task.materia}</span>
                </p>
            </div>
        </header>
        <div className="task-description">
            
            <p><span>Descrição: </span>{task.descricao}</p>
        </div>
        <footer>
            <p>
                Prazo: <strong>{task.prazo}</strong>
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
