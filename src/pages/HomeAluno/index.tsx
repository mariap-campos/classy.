import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';

import './styles.css';

function HomeAluno() {
    return (
    <div id="home-aluno" className="container">
        <PageHeader title="Bem vindo!" back="/" description="É sempre muito bom te ver :)"/>
            <Link to="/agenda/tasks" className="admin">
                Tasks
            </Link>
            <Link to="/agenda/exams" className="admin">
                Exams
            </Link>
            <Link to="/cadastro/tarefa" className="admin">
                mural
            </Link>

    </div>
    )
}

export default HomeAluno;