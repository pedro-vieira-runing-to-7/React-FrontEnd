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


    constructor(props){
        super(props);
        this.state ={
            status: '', 
            tipoPessoa: '',
            lstStatus: [],
            lstTipoPessoa: [],
        }
    }

    componentDidMount() {

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
                    <TextField type="text" placeholder="Nome" fullWidth    margin="normal" name="Nome" value={this.state.Nome}  onChange={handleChange()} defaultValue={values.Nome}/>
                    </Grid>
                    <Grid item xs={12} sm={1}></Grid>
                    <Grid  item xs={12} sm={3}>
                    <FormLabel component="legend">Nome Social</FormLabel>
                    <TextField type="text" placeholder="Nome Social" fullWidth  margin="normal" name="NomeSocial" value={this.state.NomeSocial}  onChange={handleChange()} defaultValue={values.NomeSocial}/>
                    </Grid>
                    <Grid item xs={12} sm={1}></Grid>
       
                    <Grid item xs={12} sm={3}>
                    <FormControl component="fieldset" fullWidth >
                      <FormLabel component="legend">Gênero</FormLabel>
                      <RadioGroup aria-label="position"   name="Sexo" value={this.state.Sexo} onChange={handleChange()} defaultValue={values.Sexo} row>
                      
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
                        onChange={handleChange()}
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
                    <TextField type="text" placeholder="Cpf / Cnpj" fullWidth  margin="normal"  name="CpfCnpj" value={this.state.CpfCnpj} onChange={handleChange()} defaultValue={values.CpfCnpj}/>
                    </Grid>
                   
                    <Grid item xs={12} sm={1}></Grid>
                   
                    <Grid item xs={12} sm={2}>
                    <FormLabel component="legend">Rg / Ie</FormLabel>
                    <TextField type="text" placeholder="Rg / Ie" fullWidth  margin="normal"   name="RgIe" value={this.state.RgIe} onChange={handleChange()} defaultValue={values.RgIe}/>
                    </Grid>

                    <Grid item xs={12} sm={1}></Grid>

                    <Grid item xs={12} sm={2}>
                    <FormLabel component="legend">Data Nascimento/ Abertura</FormLabel>  
                    <TextField placeholder="DataNascimentoAbertura" fullWidth   margin="normal"
                      id="DataNascimentoAbertura"
                      name="DataNascimentoAbertura"
                      type="date"
                      value={this.state.DataNascimentoAbertura}
                      onChange={handleChange()} defaultValue={values.DataNascimentoAbertura}
                     
                    />
                    </Grid>

                  
                    <Grid  item xs={12} sm={2}>
                    <FormLabel component="legend">Fone Fixo</FormLabel>
                    <TextField type="text" placeholder="Fone Fixo" fullWidth   margin="normal" name="NumeroTelefoneFixo" value={this.state.NumeroTelefoneFixo} onChange={handleChange()} defaultValue={values.NumeroTelefoneFixo}/>
                    </Grid>

                    <Grid item xs={12} sm={1}></Grid>

                    <Grid item xs={12} sm={2}>
                    <FormLabel component="legend">Celular</FormLabel>
                    <TextField type="text" placeholder="Celular" fullWidth   margin="normal" name="NumeroCelular" value={this.state.NumeroCelular} onChange={handleChange()} defaultValue={values.NumeroCelular}/>
                    </Grid>

                    <Grid item xs={12} sm={1}></Grid>

                    <Grid item xs={12} sm={2}>
                    <FormLabel component="legend">E-Mail</FormLabel>
                    <TextField type="text" placeholder="E-Mail"  fullWidth margin="normal"   name="Email" value={this.state.Email} onChange={handleChange()} defaultValue={values.Email}/>
                    </Grid>

                    <Grid item xs={12} sm={1}></Grid>

                    <Grid item xs={12} sm={2}>
                    <FormLabel component="legend">Status</FormLabel>  
                    <TextField  fullWidth    margin="normal" 
                        id="IdStatus"
                        name="IdStatus"
                        select
                        value={this.state.IdStatus} 
                        onChange={handleChange()}
                        defaultValue={values.IdStatus}
                        >
                        {this.state.lstStatus.map(dado => (
                                        <MenuItem  key={dado.value} value={dado.value}> {dado.display}</MenuItem>
                                        ))}
                    </TextField>
                    </Grid>
            </form>


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


            </Grid>
    </React.Fragment>
        );
    }
}
const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'    
};


export default  PessoaComponent;