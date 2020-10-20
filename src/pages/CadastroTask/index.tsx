import React, { FormEvent, useState } from 'react';
import {useHistory} from 'react-router-dom';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/Textarea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

import './styles.css';
import api from '../../services/api';

function Cadastro() {

    const history = useHistory();

    const [name, setName] = useState('');
    const [materia, setMateria] = useState('');
    const [descricao, setDescricao] = useState('');
    const [prazo, setPrazo] = useState('');
    const [classId, setClassId] = useState('');

    function handleCreateTask(e: FormEvent) {
        e.preventDefault();

        api.post('tasks', {
            name,
            materia,
            descricao,
            prazo,
            classId: Number(classId)
        }).then(() => {
            alert('Cadastro realizado com sucesso!');
            history.push('/');

        }).catch(() => {
            alert('Erro ao cadastrar!');
        })
    }


    return (
    <div id="page-schedule-tasks" className="container">
        <PageHeader 
            title="Task nova na área? Sem problemas!" 
            description="Cadastre-a no seu classy rapidinho..."
            back="/cadastro"
        />

        <main>
            <form onSubmit={handleCreateTask}>
                <fieldset>
                    <legend>Dados da Tarefa</legend>

                    <Input 
                        name="name" 
                        label="Nome:" 
                        type="text" 
                        value={name} 
                        onChange={(e) => {setName(e.target.value)}}
                    />
                    <Input 
                        name="materia" 
                        label="Matéria:" 
                        type="text"
                        value={materia}
                        onChange={(e) => {setMateria(e.target.value)}}
                    />
                    <Textarea 
                        name="descricao" 
                        label="Descrição da tarefa" 
                        value={descricao}
                        onChange={(e) => {setDescricao(e.target.value)}}
                    />
                    <Input 
                        name="prazo" 
                        label="Prazo:" 
                        type="date"
                        value={prazo}
                        onChange={(e) => {setPrazo(e.target.value)}}
                    />
                    <Input 
                        name="classId" 
                        label="Id da turma:" 
                        type="text"
                        value={classId}
                        onChange={(e) => {setClassId(e.target.value)}}
                    />
                </fieldset>

                <footer>
                    <p>
                    <FontAwesomeIcon icon={faExclamationTriangle} className="warning-icon" />
                    Importante! <br />
                    Preencha todos os dados
                    </p>
                    <button type="submit">
                        Salvar Tarefa
                    </button>
                </footer>

            </form>

        </main>
        
    </div>
    )
}

export default Cadastro;