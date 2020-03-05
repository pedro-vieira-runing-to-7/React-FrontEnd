import React from "react";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./Home";
import ConsultaPessoaComponent from "./pessoa/ConsultaPessoa";
import CadastraPessoaComponent from "./pessoa/CadastraPessoa";
import EditaPessoaComponent from "./pessoa/EditaPessoa";

const AppRouter = () => {
    return(
        <div style={style}>
            <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/consulta-pessoas" component={ConsultaPessoaComponent} />
                        <Route path="/cadastra-pessoa" component={CadastraPessoaComponent} />
                        <Route path="/edita-pessoa" component={EditaPessoaComponent} />
                    </Switch>
            </Router>
        </div>
    )
}

const style={
    marginTop:'20px'
}

export default AppRouter;