import React, {FormEvent, useState} from 'react';
import PageHeader from '../../components/PageHeader';
import TaskItem, { Task } from '../../components/TaskItem';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import { faSquare } from '@fortawesome/free-solid-svg-icons'

import './styled.css'
import Input from '../../components/Input';
import api from '../../services/api';
import Button from '../../components/Button';


const ScheduleTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [classId, setClassId] = useState('');
    const [className, setClassName]= useState('');

    async function searchTasks(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('tasks', {
            params: {
                classId
            }
        });
        setTasks(response.data);
            const idk = await api.get('classes', {
                params: {
                    classId
                }
            });
            if (classId !== null) {
                setClassName(idk.data[0].className);
            }

    }

    return (
        <div id="page-schedule" className="container">
            <PageHeader title="Próximas atividades e trabalhos no seu classy" back="/">
                <form id="search-tasks" onSubmit={searchTasks}>
                    <Input 
                        className="input-block"
                        name="classId" 
                        label="Id da turma:" 
                        type="text"
                        value={classId}
                        onChange={(e) => {setClassId(e.target.value)}}
                    />
                    <Button>
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    </Button>
                </form>
            </PageHeader>

            <main>
                {className ? className : null}
                {tasks.length < 1 ? '//SEM TASKS COMPONENTES AQUI' : tasks.map((task: Task) => {
                    return <TaskItem key={task.id} task={task} />
                })}
                <Link to="/agenda/exams" className="admin">
                    Provas
                </Link>
            </main>

        </div>
    )
}

export default ScheduleTasks;