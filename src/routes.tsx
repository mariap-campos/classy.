import React from 'react';

import { BrowserRouter, Route} from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Landing from './pages/Landing';
import ScheduleTasks from './pages/ScheduleTasks';
import ScheduleExams from './pages/ScheduleExams';
import CadastroTurma from './pages/CadastroTurma';
import CadastroTask from './pages/CadastroTask';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/agenda/tasks" component={ScheduleTasks}/>
            <Route path="/agenda/exams" component={ScheduleExams}/>
            <Route path="/cadastro" exact component={Cadastro}/>
            <Route path="/cadastro/turma" component={CadastroTurma}/>
            <Route path="/cadastro/tarefa" component={CadastroTask}/>
        </BrowserRouter>
    )
}

export default Routes;