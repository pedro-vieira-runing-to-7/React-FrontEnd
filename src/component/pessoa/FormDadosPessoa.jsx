import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ApiService from "../../service/ApiService";

class PessoaComponent extends Component{   
  
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

    constructor(props){
        super(props);
        this.state ={
            status: '', 
            tipoPessoa: '',
            lstStatus: [],
            lstTipoPessoa: [],
           /* Id: '',
            IdStatus: 0,
            IdTipoPessoa: 0,
            Nome: '',
            NomeSocial: '',
            CpfCnpj: '',
            RgIe: '',
            DataNascimentoAbertura: "2020-03-02",
            Sexo: '',
            Email: '',
            NumeroTelefoneFixo: '',
            NumeroCelular: ''*/
        }
    }

    componentWillMount() {

      this.loadPessoa();

      const status = ApiService.getStatus();
      const tipoPessoa = ApiService.getTipoPessoa();

      this.setState({  status, tipoPessoa  })
  
        let statusAPI = status.map(st => {
          return { value: st.id, display: st.nome };
        });
        let tipoPessoaAPI = tipoPessoa.map(tipo => {
          return { value: tipo.id, display: tipo.nome };
        });


        this.setState({
          lstStatus: [].concat(statusAPI),
          lstTipoPessoa: [].concat(tipoPessoaAPI),
        });

        this.loadPessoa = this.loadPessoa.bind(this);
  }


  loadPessoa() {
      
    const acaoForm = window.localStorage.getItem("acaoForm");
    const pessoaId = window.localStorage.getItem("pessoaId");

    // se for ação de alteração 
    if (pessoaId !== '' && acaoForm === '1')
    {
    ApiService.fetchPessoaById(pessoaId)
        .then((res) => {
            let pessoa = res.data;
            this.setState({
                Id: pessoa.id,
                IdStatus: pessoa.idStatus,
                IdTipoPessoa: pessoa.idTipoPessoa,
                Nome: pessoa.nome,
                NomeSocial: pessoa.nomeSocial,
                CpfCnpj: pessoa.cpfCnpj,
                RgIe: pessoa.rgIe,
                DataNascimentoAbertura: pessoa.dataNascimentoAbertura,
                Sexo: pessoa.sexo,
                Email: pessoa.email,
                NumeroTelefoneFixo: pessoa.numeroTelefoneFixo,
                NumeroCelular: pessoa.numeroCelular
            })
        });
      }
}

    render() {

      const { values, handleChange  } = this.props;

        return(
          <React.Fragment>
          <Typography variant="h6" gutterBottom>
           Dados Pessoais
          </Typography>
          <Grid container spacing={50}>
                <form style={formContainer} >
               
                    <Grid   item xs={12} sm={3}>
                    <FormLabel component="legend">Nome</FormLabel>
                    <TextField type="text" placeholder="Nome" fullWidth    margin="normal" name="Nome" value={this.state.Nome}  onChange={handleChange('Nome')} defaultValue={values.Nome}/>
                    </Grid>
                    <Grid item xs={12} sm={1}></Grid>
                    <Grid  item xs={12} sm={3}>
                    <FormLabel component="legend">Nome Social</FormLabel>
                    <TextField type="text" placeholder="Nome Social" fullWidth  margin="normal" name="NomeSocial" value={this.state.NomeSocial}  onChange={handleChange('NomeSocial')} defaultValue={values.NomeSocial}/>
                    </Grid>
                    <Grid item xs={12} sm={1}></Grid>
       
                    <Grid item xs={12} sm={3}>
                    <FormControl component="fieldset" fullWidth >
                      <FormLabel component="legend">Gênero</FormLabel>
                      <RadioGroup aria-label="position"   name="Sexo" value={this.state.Sexo} onChange={handleChange('Sexo')} defaultValue={values.Sexo} row>
                      
                        <FormControlLabel
                          value="M"
                          control={<Radio color="primary" />}
                          label="Masculino"
                          labelPlacement="start"
                        />
                        <FormControlLabel
                          value="F"
                          control={<Radio color="primary" />}
                          label="Feminino"
                          labelPlacement="start"
                        />
                        
                      </RadioGroup>
                    </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={2}>
                    <FormLabel component="legend">Tipo Pessoa</FormLabel>  
                    <TextField fullWidth  margin="normal" 
                        id="IdTipoPessoa"
                        name="IdTipoPessoa"
                        select
                        value={this.state.IdTipoPessoa} 
                        onChange={handleChange('IdTipoPessoa')}
                        defaultValue={values.IdTipoPessoa}
                        >
                        {this.state.lstTipoPessoa.map(dado => (
                                        <MenuItem  key={dado.value} value={dado.value}> {dado.display}</MenuItem>
                                        ))}
                    </TextField>
                    </Grid>

                    <Grid item xs={12} sm={1}></Grid>

                    <Grid item xs={12} sm={2}>
                    <FormLabel component="legend">Cpf / Cnpj</FormLabel>                   
                    <TextField type="text" placeholder="Cpf / Cnpj" fullWidth  margin="normal"  name="CpfCnpj" value={this.state.CpfCnpj} onChange={handleChange('CpfCnpj')} defaultValue={values.CpfCnpj}/>
                    </Grid>
                   
                    <Grid item xs={12} sm={1}></Grid>
                   
                    <Grid item xs={12} sm={2}>
                    <FormLabel component="legend">Rg / Ie</FormLabel>
                    <TextField type="text" placeholder="Rg / Ie" fullWidth  margin="normal"   name="RgIe" value={this.state.RgIe} onChange={handleChange('RgIe')} defaultValue={values.RgIe}/>
                    </Grid>

                    <Grid item xs={12} sm={1}></Grid>

                    <Grid item xs={12} sm={2}>
                    <FormLabel component="legend">Data Nascimento/ Abertura</FormLabel>  
                    <TextField placeholder="DataNascimentoAbertura" fullWidth   margin="normal"
                      id="DataNascimentoAbertura"
                      name="DataNascimentoAbertura"
                      type="date"
                      value={this.state.DataNascimentoAbertura}
                      onChange={handleChange('DataNascimentoAbertura')} defaultValue={values.DataNascimentoAbertura}
                     
                    />
                    </Grid>

                  
                    <Grid  item xs={12} sm={2}>
                    <FormLabel component="legend">Fone Fixo</FormLabel>
                    <TextField type="text" placeholder="Fone Fixo" fullWidth   margin="normal" name="NumeroTelefoneFixo" value={this.state.NumeroTelefoneFixo} onChange={handleChange('NumeroTelefoneFixo')} defaultValue={values.NumeroTelefoneFixo}/>
                    </Grid>

                    <Grid item xs={12} sm={1}></Grid>

                    <Grid item xs={12} sm={2}>
                    <FormLabel component="legend">Celular</FormLabel>
                    <TextField type="text" placeholder="Celular" fullWidth   margin="normal" name="NumeroCelular" value={this.state.NumeroCelular} onChange={handleChange('NumeroCelular')} defaultValue={values.NumeroCelular}/>
                    </Grid>

                    <Grid item xs={12} sm={1}></Grid>

                    <Grid item xs={12} sm={2}>
                    <FormLabel component="legend">E-Mail</FormLabel>
                    <TextField type="text" placeholder="E-Mail"  fullWidth margin="normal"   name="Email" value={this.state.Email} onChange={handleChange('Email')} defaultValue={values.Email}/>
                    </Grid>

                    <Grid item xs={12} sm={1}></Grid>

                    <Grid item xs={12} sm={2}>
                    <FormLabel component="legend">Status</FormLabel>  
                    <TextField  fullWidth    margin="normal" 
                        id="IdStatus"
                        name="IdStatus"
                        select
                        value={this.state.IdStatus} 
                        onChange={handleChange('IdStatus')}
                        defaultValue={values.IdStatus}
                        >
                        {this.state.lstStatus.map(dado => (
                                        <MenuItem  key={dado.value} value={dado.value}> {dado.display}</MenuItem>
                                        ))}
                    </TextField>
                    </Grid>
            </form>

            <br />
        
        <Button
          color="primary"
          variant="contained"
          onClick={this.continue}
        >Continuar</Button>
         &nbsp; &nbsp;

       <Button
        variant="contained"   
        color="default" formNoValidate  
        onClick={eve => window.location.href='/'}
        > Cancelar </Button>

            </Grid>
    </React.Fragment>
        );
    }
}
const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'    
};

const smallSize ={
  width: '200px',
}


export default  PessoaComponent;