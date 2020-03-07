import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

export class FormStart extends Component {

  constructor(props){
    super(props);
    this.state ={
        Acao: '',
    }

}

componentWillMount() {
  const acaoForm = window.localStorage.getItem("acaoForm");

  this.setState({Acao: acaoForm === "1" ? 'Você irá alterar um cadastro' : 'Você irá fazer um cadastro'});
}
 
continue = e => {
  e.preventDefault();
  this.props.nextStep();
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
            <h1> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;         {this.state.Acao}</h1>
            <Button
          color="primary"
          variant="contained"
          onClick={this.continue}
        >OK</Button>
          </Dialog>

        
          </Grid>
    </React.Fragment>
    );
  }
}



export default FormStart;

