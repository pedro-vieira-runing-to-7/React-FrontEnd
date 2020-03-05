import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const style = {
    flexGrow: 1
}
const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={style}>
                      SAGE - Cadastro de Pessoas
                    </Typography> 
                      
                    <Button variant="text" color="inherit" formNoValidate  onClick={eve => window.location.href='/consulta-pessoas'}> Consulta  </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button variant="text" color="inherit" formNoValidate  onClick={eve => window.location.href='/cadastra-pessoa'}> Novo Cadastro  </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button variant="text" color="inherit" formNoValidate  onClick={eve => window.location.href='/'}> Home </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;

