import React, {useState} from 'react';
import PageHeader from '../../components/PageHeader';
import TaskItem from '../../components/TaskItem';
import { Link } from 'react-router-dom';
// import { faSquare } from '@fortawesome/free-solid-svg-icons'

import './styled.css'



const ScheduleExams = () => {
    return (
        <div id="page-schedule" className="container">
            <PageHeader title="Próximas atividades e trabalhos no seu classy" back="/"/>

            <main>

            </main>

        </div>
    )
}

export default ScheduleExams;