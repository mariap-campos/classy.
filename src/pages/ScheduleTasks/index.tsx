import React, {FormEvent, useState} from 'react';
import PageHeader from '../../components/PageHeader';
import TaskItem, { Task } from '../../components/TaskItem';
import EmptyItem from '../../components/EmptyItem';
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
    const [classes, setClasses]= useState('');
    const [check, setCheck]= useState(false);
    const [title, setTitle]= useState(false);

    async function searchTasks(e: FormEvent) {
        e.preventDefault();

        setClasses('');
        setTitle(true);
        setCheck(true);

        const response = await api.get('tasks', {
            params: {
                classId
            }
        });
        setTasks(response.data);
        console.log(response.data)
            const responseName = await api.get('classes', {
                params: {
                    classId
                }
            });
            if (responseName.data[0]) {
                setClasses(responseName.data[0].className)
            } else {
                setTitle(false);

            }
            // responseName.data[0] && setClasses(responseName.data[0].className)
    }

    return (
        <div id="page-schedule" className="container">
            <PageHeader title="Próximas atividades e trabalhos no seu classy" back="/" description="Para começar, digite o id do seu classy...">
                <form id="search-tasks" onSubmit={searchTasks}>
                    <Input 
                        className="input-block"
                        name="classId" 
                        label="Id do Classy:" 
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
                {console.log(classes)}
                {title ? <p className="class-name"><strong>Turma:</strong> {classes}</p> : null}
                {/* <p className="class-name"><strong>Turma:</strong> {classes}</p>  */}
                {tasks.length < 1 && check ? <EmptyItem/> : tasks.map((task: Task) => {
                    return <TaskItem key={task.id} task={task} />
                })}
            </main>

        </div>
    )
}

export default ScheduleTasks;