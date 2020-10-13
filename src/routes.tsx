import React from 'react';

import { BrowserRouter, Route} from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Landing from './pages/Landing';
import Schedule from './pages/Schedule';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/agenda" component={Schedule}/>
            <Route path="/cadastro" component={Cadastro}/>
        </BrowserRouter>
    )
}

export default Routes;