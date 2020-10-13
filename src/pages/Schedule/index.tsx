import React, {useState} from 'react';
import PageHeader from '../../components/PageHeader';
import TaskItem from '../../components/TaskItem';
// import { faSquare } from '@fortawesome/free-solid-svg-icons'

import './styled.css'



const Schedule = () => {
    return (
        <div id="page-schedule" className="container">
            <PageHeader title="Próximas atividades e trabalhos no seu classy"/>

            <main>
                <TaskItem/>
                <TaskItem/>
                <TaskItem/>
            </main>

        </div>
    )
}

export default Schedule;