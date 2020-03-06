import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';

export class Confirmar extends Component {

  constructor(props){
    super(props);
    this.state ={
        Id: this.props.values.Id,
        IdStatus: this.props.values.IdStatus,
        IdTipoPessoa: this.props.values.IdTipoPessoa,
        Nome: this.props.values.Nome,
        NomeSocial: this.props.values.NomeSocial,
        CpfCnpj: this.props.values.CpfCnpj,
        RgIe: this.props.values.RgIe,
        DataNascimentoAbertura: this.props.values.DataNascimentoAbertura,
        Sexo: this.props.values.Sexo,
        Email: this.props.values.Email,
        NumeroTelefoneFixo: this.props.values.NumeroTelefoneFixo,
        NumeroCelular: this.props.values.NumeroCelular,
        EnderecoId: this.props.values.EnderecoId,
        EnderecoIdStatus: this.props.values.EnderecoIdStatus,
        EnderecoIdTipoEndereco: this.props.values.EnderecoIdTipoEndereco,
        EnderecoLogradouro: this.props.values.EnderecoLogradouro,
        EnderecoNumero: this.props.values.EnderecoNumero,
        EnderecoBairro: this.props.values.EnderecoBairro,
        EnderecoCidade: this.props.values.EnderecoCidade,
        EnderecoCep: this.props.values.EnderecoCep,
        EnderecoIdEstado: this.props.values.EnderecoIdEstado
    }

    this.SaveAndContinue = this.SaveAndContinue.bind(this);
}

  SaveAndContinue = e => {
    e.preventDefault();


  const acaoForm = window.localStorage.getItem("acaoForm");
   // Se for Inclusão 
  if (acaoForm === "0"){

    let pessoa = { 
      IdStatus: this.state.IdStatus,
      IdTipoPessoa: this.state.IdTipoPessoa,
      Nome: this.state.Nome,
      NomeSocial: this.state.NomeSocial,
      CpfCnpj: this.state.CpfCnpj,
      RgIe: this.state.RgIe,
      DataNascimentoAbertura: this.state.DataNascimentoAbertura,
      Sexo: this.state.Sexo,
      Email: this.state.Email,
      NumeroTelefoneFixo: this.state.NumeroTelefoneFixo,
      NumeroCelular: this.state.NumeroCelular,
      Endereco: [ {    
         IdStatus: this.state.EnderecoIdStatus,
         IdTipoEndereco: this.state.EnderecoIdTipoEndereco,
         Logradouro: this.state.EnderecoLogradouro,
         Numero: this.state.EnderecoNumero,
         Bairro: this.state.EnderecoBairro,
         Cidade: this.state.EnderecoCidade,
         Cep: this.state.EnderecoCep,
         IdEstado: this.state.EnderecoIdEstado 
       }]
  };

    ApiService.addPessoa(pessoa)
        .then(res => {
            this.setState({message : 'Pessoa cadastrada com sucesso.'});
        });
  }else{

    let pessoa = { 
      Id: this.state.Id,
      IdStatus: this.state.IdStatus,
      IdTipoPessoa: this.state.IdTipoPessoa,
      Nome: this.state.Nome,
      NomeSocial: this.state.NomeSocial,
      CpfCnpj: this.state.CpfCnpj,
      RgIe: this.state.RgIe,
      DataNascimentoAbertura: this.state.DataNascimentoAbertura,
      Sexo: this.state.Sexo,
      Email: this.state.Email,
      NumeroTelefoneFixo: this.state.NumeroTelefoneFixo,
      NumeroCelular: this.state.NumeroCelular,
      Endereco: [ {    
         Id: this.state.EnderecoId,            
         IdStatus: this.state.EnderecoIdStatus,
         IdTipoEndereco: this.state.EnderecoIdTipoEndereco,
         Logradouro: this.state.EnderecoLogradouro,
         Numero: this.state.EnderecoNumero,
         Bairro: this.state.EnderecoBairro,
         Cidade: this.state.EnderecoCidade,
         Cep: this.state.EnderecoCep,
         IdEstado: this.state.EnderecoIdEstado 
       }]
  };

      ApiService.editPessoa(pessoa)
            .then(res => {
                this.setState({message : 'Pessoa alterada com sucesso.'});
            });
    }

    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
       values: {
        Id,
        IdStatus,
        IdTipoPessoa,
        Nome,
        NomeSocial,
        CpfCnpj,
        RgIe,
        DataNascimentoAbertura,
        Sexo,
        Email,
        NumeroTelefoneFixo,
        NumeroCelular,
        EnderecoId,
        EnderecoIdStatus,
        EnderecoIdTipoEndereco,
        EnderecoLogradouro,
        EnderecoNumero,
        EnderecoBairro,
        EnderecoCidade,
        EnderecoCep,
        EnderecoIdEstado,
        EnderecoNomeEstado }
    } = this.props;


    return (
      <React.Fragment>
      <Typography variant="h6" gutterBottom>
      Confirmar Dados
      </Typography>
     
      <form style={formContainer} >

      <Grid container spacing={3}>
          <List>
          <ListItem>
              <ListItemText  primary="Status" secondary={IdStatus > 0 ? IdStatus === 1 ? 'Ativo' : 'Inativo' : 'Novo' } /> 
            </ListItem>
          <ListItem>
              <ListItemText  primary="Tipo Pessoa" secondary={IdTipoPessoa > 0 ? 'Jurídica' : 'Física'} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary="Nome" secondary={Nome} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary="Nome Social" secondary={NomeSocial} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary="CPF/CNPJ" secondary={CpfCnpj} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary="RG/IE" secondary={RgIe} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary="Nascimento/Abertura" secondary={DataNascimentoAbertura} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary="Sexo" secondary={Sexo} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary="E-mail" secondary={Email} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary="Fone Fixo" secondary={NumeroTelefoneFixo} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary="Celular" secondary={NumeroCelular} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary="Status Endereço" secondary={EnderecoIdStatus > 0 ? EnderecoIdStatus === 1 ? 'Ativo' : 'Inativo' : 'Novo'} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary="Tipo Endereço" secondary={EnderecoIdTipoEndereco > 0 ? 'Entrega' : 'Cobrança'} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary="Logradouro" secondary={EnderecoLogradouro} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Número"  secondary={EnderecoNumero} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Bairro"  secondary={EnderecoBairro} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary="Cidade" secondary={EnderecoCidade} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary="Cep" secondary={EnderecoCep} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary="Estado" secondary={EnderecoNomeEstado} /> 
            </ListItem>
           
          </List>
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
            onClick={this.SaveAndContinue}
          >Salvar</Button>

          </form>
          
    
    </React.Fragment>
    );
  }
}

const formContainer = {
  display: 'flex',
  flexFlow: 'row wrap',
};

export default Confirmar;

