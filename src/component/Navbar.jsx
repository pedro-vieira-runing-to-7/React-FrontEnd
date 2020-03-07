import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const style = {
    flexGrow: 1,
    backgroundColor: '#4caf50',
}


export class NavBar extends Component {
    
addPessoa() {
    window.localStorage.setItem("acaoForm", 0);
    window.localStorage.removeItem("pessoaId");
    window.location.href = '/cadastra-pessoa';
}

    render() {
        return (
            <div>
                <AppBar style={style} position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" style={style}>
                        SAGE - Cadastro de Pessoas
                        </Typography> 
                        
                        <Button variant="text" color="inherit" formNoValidate  onClick={eve => window.location.href='/consulta-pessoas'}> Consulta  </Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button variant="text" color="inherit" formNoValidate  onClick={() => this.addPessoa()}> Novo Cadastro  </Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button variant="text" color="inherit" formNoValidate  onClick={eve => window.location.href='/'}> Home </Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default NavBar;


