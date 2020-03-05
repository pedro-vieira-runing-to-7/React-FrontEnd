import React, {Component} from 'react';
import ApiService from "./service/ApiService";
import './App.css';
import AppRouter from "./component/RouterComponent";
import NavBar from "./component/Navbar";
import Container from '@material-ui/core/Container';



class App extends Component {

    render() {
        return (
            <div>
                <NavBar/>
                <Container>
                    <AppRouter/>
                </Container>
            </div>
        );
    }

    componentDidMount() {
      
                let estados = [ {Sigla: 'SP', Nome: 'São Paulo'}, 
                                {Sigla: 'PR', Nome: 'Paraná'}, 
                                {Sigla: 'RJ', Nome: 'Rio de Janeiro'},
                                {Sigla: 'SC', Nome: 'Santa Catarina'}];
        ApiService.addEstados(estados);
    }
}


export default App;
