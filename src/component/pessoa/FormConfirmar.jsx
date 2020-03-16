import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import Moment from 'react-moment';
import FormLabel from '@material-ui/core/FormLabel';

export class Confirmar extends Component {

  constructor(props){
    super(props);
  
    this.SaveAndContinue = this.SaveAndContinue.bind(this);
}

  SaveAndContinue = e => {
    e.preventDefault();


  const acaoForm = window.localStorage.getItem("acaoForm");
   // Se for Inclusão 
  if (acaoForm === "0"){

    let pessoa = { 
      IdStatus: this.props.data.IdStatus,
      IdTipoPessoa: this.props.data.IdTipoPessoa,
      Nome: this.props.data.Nome,
      NomeSocial: this.props.data.NomeSocial,
      CpfCnpj: this.props.data.CpfCnpj,
      RgIe: this.props.data.RgIe,
      DataNascimentoAbertura: this.props.data.DataNascimentoAbertura,
      Sexo: this.props.data.Sexo,
      Email: this.props.data.Email,
      NumeroTelefoneFixo: this.props.data.NumeroTelefoneFixo,
      NumeroCelular: this.props.data.NumeroCelular,
      Endereco: [ {    
         IdStatus: this.props.data.EnderecoIdStatus,
         IdTipoEndereco: this.props.data.EnderecoIdTipoEndereco,
         Logradouro: this.props.data.EnderecoLogradouro,
         Numero: this.props.data.EnderecoNumero,
         Bairro: this.props.data.EnderecoBairro,
         Cidade: this.props.data.EnderecoCidade,
         Cep: this.props.data.EnderecoCep,
         IdEstado: this.props.data.EnderecoIdEstado 
       }]
  };

    ApiService.addPessoa(pessoa)
        .then(res => {
            this.setState({message : 'Pessoa cadastrada com sucesso.'});
        });
  }else{

    let pessoa = { 
      Id: this.props.data.Id,
      IdStatus: this.props.data.IdStatus,
      IdTipoPessoa: this.props.data.IdTipoPessoa,
      Nome: this.props.data.Nome,
      NomeSocial: this.props.data.NomeSocial,
      CpfCnpj: this.props.data.CpfCnpj,
      RgIe: this.props.data.RgIe,
      DataNascimentoAbertura: this.props.data.DataNascimentoAbertura,
      Sexo: this.props.data.Sexo,
      Email: this.props.data.Email,
      NumeroTelefoneFixo: this.props.data.NumeroTelefoneFixo,
      NumeroCelular: this.props.data.NumeroCelular,
      Endereco: [ {    
         Id: this.props.data.EnderecoId,            
         IdStatus: this.props.data.EnderecoIdStatus,
         IdTipoEndereco: this.props.data.EnderecoIdTipoEndereco,
         Logradouro: this.props.data.EnderecoLogradouro,
         Numero: this.props.data.EnderecoNumero,
         Bairro: this.props.data.EnderecoBairro,
         Cidade: this.props.data.EnderecoCidade,
         Cep: this.props.data.EnderecoCep,
         IdEstado: this.props.data.EnderecoIdEstado 
       }]
  };

      ApiService.editPessoa(pessoa)
            .then(res => {
                this.setState({message : 'Pessoa alterada com sucesso.'});
            });
    }

    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { data } = this.props;


    return (
      <React.Fragment>
      <Typography variant="h6" gutterBottom>
      Confirmar Dados
      </Typography>
     
      <form style={formContainer} >

      <Grid container spacing={3}>
          <List>
          <ListItem>
              <ListItemText  primary="Status" secondary={data.IdStatus > 0 ? data.IdStatus === 1 ? 'Ativo' : 'Inativo' : 'Novo' } /> 
            </ListItem>
          <ListItem>
              <ListItemText  primary="Tipo Pessoa" secondary={data.IdTipoPessoa > 0 ? 'Jurídica' : 'Física'} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary="Nome" secondary={data.Nome} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary={data.InfoPessoa.DescNomeSocial} secondary={data.NomeSocial} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary={data.InfoPessoa.DescDoc1} secondary={data.CpfCnpj} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary={data.InfoPessoa.DescDoc2} secondary={data.RgIe} /> 
            </ListItem>
            <ListItem>
            <FormLabel component="legend">{data.InfoPessoa.DescData}:</FormLabel>  
              &nbsp;&nbsp;<Moment format="DD/MM/YYYY"  withTitle >
               {data.DataNascimentoAbertura}
            </Moment>
            </ListItem>
            <ListItem>
              <ListItemText  primary="Sexo" secondary={data.Sexo} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary="E-mail" secondary={data.Email} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary="Fone Fixo" secondary={data.NumeroTelefoneFixo} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary="Celular" secondary={data.NumeroCelular} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary="Status Endereço" secondary={data.EnderecoIdStatus > 0 ? data.EnderecoIdStatus === 1 ? 'Ativo' : 'Inativo' : 'Novo'} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary="Tipo Endereço" secondary={data.EnderecoIdTipoEndereco > 0 ? 'Entrega' : 'Cobrança'} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary="Logradouro" secondary={data.EnderecoLogradouro} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Número"  secondary={data.EnderecoNumero} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Bairro"  secondary={data.EnderecoBairro} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary="Cidade" secondary={data.EnderecoCidade} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary="Cep" secondary={data.EnderecoCep} /> 
            </ListItem>
            <ListItem>
              <ListItemText  primary="Estado" secondary={data.EnderecoNomeEstado} /> 
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

