import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ApiService from "../../service/ApiService";
import FormLabel from '@material-ui/core/FormLabel';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class EnderecoComponent extends Component{   


    constructor(props){
        super(props);
        this.state ={
            status: '',
            estados: '',
            tipoEndereco: '',
            lstEstados: [],
            lstStatus: [],
            lstTipoEndereco: [],
        }
    }

      
    continue = e => {
      e.preventDefault();
      
      this.form.submit();
  
            this.form.isFormValid(false).then((isValid) => {
              if (isValid) {
                 this.props.nextStep();
              }
         });
    };
  
  
  handleSubmit = () => {
      this.setState({ submitted: true }, () => {
          setTimeout(() => this.setState({ submitted: false }), 5000);
      });
  }
  

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };


  validatorListener = (result) => {
    this.setState({ disabled: !result });
}

    componentDidMount() {

      const estados = ApiService.getEstados();
      const status = ApiService.getStatus();
      const tipoEndereco = ApiService.getTipoEndereco();   

      this.setState({ estados, status, tipoEndereco  })
  
        let estadosAPI = estados.map(estado => {
          return { value: estado.id, display: estado.nome };
        });
       
        let statusAPI = status.map(st => {
          return { value: st.id, display: st.nome };
        });

        let tipoEnderecoAPI = tipoEndereco.map(tipo => {
          return { value: tipo.id, display: tipo.nome };
        });

        this.setState({
          lstEstados: [].concat(estadosAPI), 
          lstStatus: [].concat(statusAPI),
          lstTipoEndereco: [].concat(tipoEnderecoAPI)
        });
  }

    render() {

      const { data, handleChange } = this.props;

        return(
          <React.Fragment>
          <Typography variant="h6" gutterBottom>
           Dados do Endereço
          </Typography>
          <ValidatorForm  style={formContainer} 
                ref={(r) => { this.form = r; }}
                onSubmit={this.handleSubmit}
                instantValidate
            >

          <Grid container spacing={50}>

                   
                    <Grid item xs={12} sm={3}>
                    <FormLabel component="legend">Logradouro</FormLabel>  
                    <TextValidator 
                    type="text"
                    placeholder="Logradouro" 
                    fullWidth margin="normal" 
                    name="EnderecoLogradouro"  
                    onChange={handleChange()}
                     value={data.EnderecoLogradouro}
                     validators={['required']}
                     errorMessages={['* obrigatório']}
                     validatorListener={this.validatorListener}
                     />
                    </Grid>

                    <Grid item xs={12} sm={1}></Grid>

                    <Grid item xs={12} sm={1}>
                    <FormLabel component="legend">Número</FormLabel>  
                   <TextValidator
                   type="text"
                    placeholder="Número" 
                    fullWidth
                    margin="normal"
                    name="EnderecoNumero" 
                    onChange={handleChange()} 
                    value={data.EnderecoNumero}
                    validators={['required']}
                     errorMessages={['* obrigatório']}
                    validatorListener={this.validatorListener}
                    />
                   </Grid>

                   <Grid item xs={12} sm={1}></Grid>

                   <Grid item xs={12} sm={3}>
                   <FormLabel component="legend">Bairro</FormLabel>  
                    <TextValidator 
                    type="text" 
                    placeholder="Bairro" 
                    fullWidth 
                    margin="normal" 
                    name="EnderecoBairro"  
                    onChange={handleChange()} 
                    value={data.EnderecoBairro}
                    validators={['required']}
                    errorMessages={['* obrigatório']}
                    validatorListener={this.validatorListener}
                    />
                    </Grid>

                    <Grid item xs={12} sm={3}></Grid>

                    <Grid item xs={12} sm={3}>
                    <FormLabel component="legend">Cidade</FormLabel>  
                    <TextValidator 
                    type="text" 
                    placeholder="Cidade" 
                    fullWidth 
                    margin="normal" 
                    name="EnderecoCidade"  
                    onChange={handleChange()} 
                    value={data.EnderecoCidade}
                    validators={['required']}
                     errorMessages={['* obrigatório']}
                    validatorListener={this.validatorListener}
                    />
                    </Grid>

                    <Grid item xs={12} sm={1}></Grid>

                    <Grid item xs={12} sm={1}>
                    <FormLabel component="legend">CEP</FormLabel>  
                    <TextValidator 
                    type="text" 
                    placeholder="CEP" 
                    fullWidth 
                    margin="normal" 
                    name="EnderecoCep"  
                    onChange={handleChange()}
                    value={data.EnderecoCep}
                    validators={['required']}
                     errorMessages={['* obrigatório']}
                    validatorListener={this.validatorListener}
                    />
                    </Grid>

                    <Grid item xs={12} sm={1}></Grid>

                    <Grid item xs={12} sm={3}>
                    <FormLabel component="legend">Estado</FormLabel>  
                    <TextValidator fullWidth margin="normal" 
                        id="EnderecoIdEstado"
                        name="EnderecoIdEstado"
                        select
                        onChange={handleChange()}
                        value={data.EnderecoIdEstado}
                        validators={['required']}
                        errorMessages={['* obrigatório']}
                        validatorListener={this.validatorListener}
                        >
                          {this.state.lstEstados.map(dado => (
                                <MenuItem  key={dado.value} value={dado.value}> {dado.display}</MenuItem>
                                ))}
                    </TextValidator>
                    </Grid>

                    <Grid item xs={12} sm={3}></Grid>

                    <Grid item xs={12} sm={3}>
                    <FormLabel component="legend">Tipo Endereço</FormLabel>  
                    <TextValidator 
                    fullWidth  
                    margin="normal" 
                        id="EnderecoIdTipoEndereco"
                        name="EnderecoIdTipoEndereco"
                        select
                        onChange={handleChange()} 
                        value={data.EnderecoIdTipoEndereco}
                        >
                          {this.state.lstTipoEndereco.map(dado => (
                                <MenuItem  key={dado.value} value={dado.value}> {dado.display}</MenuItem>
                                ))}
                    </TextValidator>
                    </Grid>

                    <Grid item xs={12} sm={1}></Grid>

                    <Grid item xs={12} sm={1}>
                    <FormLabel component="legend">Status</FormLabel>  
                    <TextValidator fullWidth margin="normal" 
                        id="EnderecoIdStatus"
                        name="EnderecoIdStatus"
                        select
                        onChange={handleChange()} 
                        value={data.EnderecoIdStatus}
                        >
                          {this.state.lstStatus.map(dado => (
                                <MenuItem  key={dado.value} value={dado.value}> {dado.display}</MenuItem>
                                ))}
                    </TextValidator>
                    </Grid>
            </Grid>

        <Button
          color="default"
          variant="contained"
          onClick={this.back}
        >Voltar</Button>

        &nbsp;&nbsp;&nbsp;
        <Button
          color="primary"
          variant="contained"
          onClick={this.continue}
        >Continuar</Button>

        &nbsp;&nbsp;&nbsp;
        <Button 
        variant="contained" 
        color="default" 
        onClick={eve => window.location.href='/'}
        > Cancelar </Button>


      </ValidatorForm>

    </React.Fragment>
        );
    }
}
const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap',
};


export default EnderecoComponent;