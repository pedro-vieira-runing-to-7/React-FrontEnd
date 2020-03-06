import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
          
        <React.Fragment>
          <Grid>

        <Dialog 
            open="true"
            fullWidth="true"
          >
            <AppBar title="Successo" />
            <h1> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Dados Salvos com sucesso</h1>
            <p> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Verifique na página de consulta</p>
          <Button variant="contained" color="default" formNoValidate  onClick={eve => window.location.href='/consulta-pessoas'}> OK </Button>

          </Dialog>

        
          </Grid>
    </React.Fragment>
    );
  }
}

export default Success;
