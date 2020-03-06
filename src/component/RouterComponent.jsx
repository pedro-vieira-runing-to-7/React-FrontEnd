import React from "react";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./Home";
import ConsultaPessoaComponent from "./pessoa/ConsultaPessoa";
import StepsCadastraPessoaComponent from "./pessoa/StepsCadastro";

const AppRouter = () => {
    return(
        <div style={style}>
            <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/consulta-pessoas" component={ConsultaPessoaComponent} />
                        <Route path="/cadastra-pessoa" component={StepsCadastraPessoaComponent} />
                        <Route path="/edicao-pessoa" component={StepsCadastraPessoaComponent} />
                    </Switch>
            </Router>
        </div>
    )
}

const style={
    marginTop:'20px'
}

export default AppRouter;