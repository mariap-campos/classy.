import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';

function Cadastro() {
    return (
    <div id="page-schedule" className="container">
        <PageHeader title="Atividade nova na área? Sem problemas!" back="/"/>
            <Link to="/cadastro/turma" className="admin">
                Criar Turma
            </Link>
            <Link to="/cadastro/tarefa" className="admin">
                Criar Tarefa
            </Link>

    </div>
    )
}

export default Cadastro;