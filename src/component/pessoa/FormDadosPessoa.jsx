import React, { Component } from 'react'
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
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import 'date-fns';
import { ptBR } from "date-fns/locale";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

class PessoaComponent extends Component{   
  
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

    constructor(props){
        super(props);  
        this.state = {
          disabled: false,
          submitted: false,
          status: '', 
          tipoPessoa: '',
          lstStatus: [],
          lstTipoPessoa: [],
          selectedDate: new Date(),
      }
    }

    handleDateChange = date => {
      this.setState({ selectedDate: date });
      this.props.data.DataNascimentoAbertura = date;
    };
    

      
    componentWillMount() {

      const status = ApiService.getStatus();
      const tipoPessoa = ApiService.getTipoPessoa();
 
       this.setState({status, tipoPessoa  })
   
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

      const { data, handleChange  } = this.props;

        return(
          <React.Fragment>
          <Typography variant="h6" gutterBottom>
           Dados Pessoais
          </Typography>
          <Grid container spacing={50}>

                <ValidatorForm  style={formContainer} 
                ref={(r) => { this.form = r; }}
                onSubmit={this.handleSubmit}
                instantValidate
            >
               
               <Grid item xs={12} sm={2}>
                    <FormLabel component="legend">Tipo Pessoa</FormLabel>  
                    <TextValidator fullWidth  margin="normal" 
                        id="IdTipoPessoa"
                        name="IdTipoPessoa"
                        select
                        onChange={handleChange()}
                        value={data.IdTipoPessoa}                       
                        >
                        {this.state.lstTipoPessoa.map(dado => (
                                        <MenuItem  key={dado.value} value={dado.value}> {dado.display}</MenuItem>
                                        ))}
                    </TextValidator>
                    </Grid>

                    <Grid item xs={12} sm={1}></Grid>

                    <Grid   item xs={12} sm={4}>
                    <FormLabel component="legend">Nome</FormLabel>
                     <TextValidator 
                     type="text" 
                     placeholder="Nome" 
                     fullWidth    
                     margin="normal" 
                     name="Nome" 
                     onChange={handleChange()} value={data.Nome}
                     validators={['required']}
                     errorMessages={['* obrigatório']}
                     validatorListener={this.validatorListener}
                     />
                    </Grid>

                    <Grid item xs={12} sm={1}></Grid>

                    <Grid  item xs={12} sm={3}>
                    <FormLabel component="legend">{data.InfoPessoa.DescNomeSocial} </FormLabel>
                    <TextValidator 
                    type="text" 
                    placeholder={data.InfoPessoa.DescNomeSocial} 
                    fullWidth 
                    margin="normal" 
                    name="NomeSocial" 
                    onChange={handleChange()} 
                    value={data.NomeSocial}
                    validators={['required']}
                    errorMessages={['* obrigatório']}
                    validatorListener={this.validatorListener}
                    />
                    </Grid>
                    <Grid item xs={12} sm={1}></Grid>
       
                    <Grid item xs={12} sm={3}>
                    <FormControl component="fieldset" disabled={data.InfoPessoa.HabilitaOpcao}>
                      <FormLabel component="legend">Gênero</FormLabel>
                      <RadioGroup 
                      aria-label="position"   
                      name="Sexo" 
                      onChange={handleChange()} 
                      value={data.Sexo} row>
                      
                        <FormControlLabel
                          value="M"
                          fullWidth
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
                    <FormLabel component="legend">{data.InfoPessoa.DescDoc1}</FormLabel>                   
                    <TextValidator 
                    type="text" 
                    placeholder={data.InfoPessoa.DescDoc1}
                    fullWidth  
                    margin="normal" 
                    name="CpfCnpj"
                    onChange={handleChange()} 
                    value={data.CpfCnpj}
                    validators={['required']}
                    errorMessages={['* obrigatório']}
                    validatorListener={this.validatorListener}
                    />
                    </Grid>
                   
                    <Grid item xs={12} sm={1}></Grid>
                   
                    <Grid item xs={12} sm={2}>
                    <FormLabel component="legend">{data.InfoPessoa.DescDoc2}</FormLabel>
                    <TextValidator 
                    type="text"
                    placeholder={data.InfoPessoa.DescDoc2}
                    fullWidth  
                    margin="normal"  
                    name="RgIe"
                    onChange={handleChange()} 
                    value={data.RgIe}
                    validators={['required']}
                    errorMessages={['* obrigatório']}
                    validatorListener={this.validatorListener}
                    />
                    </Grid>

                    <Grid item xs={12} sm={1}></Grid>

                    <MuiPickersUtilsProvider locale={ptBR} utils={DateFnsUtils}>

                    <Grid item xs={12} sm={2}>
                    <FormLabel component="legend">{data.InfoPessoa.DescData}</FormLabel>  
                    
                    <KeyboardDatePicker
                              disableToolbar
                              variant="inline"
                              format="dd/MM/yyyy"
                              margin="normal"
                              id="DataNascimentoAbertura"
                              name="DataNascimentoAbertura"
                              label={data.InfoPessoa.DescData}
                              value={data.DataNascimentoAbertura}
                              onChange={this.handleDateChange}
                              KeyboardButtonProps={{
                                'aria-label': 'change date',
                              }}
                    />

                    </Grid>
                    </MuiPickersUtilsProvider>
                  
                    <Grid  item xs={12} sm={2}>
                    <FormLabel component="legend">Fone Fixo</FormLabel>
                    <TextValidator 
                    type="text" 
                    placeholder="Fone Fixo" 
                    fullWidth   
                    margin="normal" 
                    name="NumeroTelefoneFixo"  
                    onChange={handleChange()} 
                    value={data.NumeroTelefoneFixo}
                    validators={['required']}
                    errorMessages={['* obrigatório']}
                    validatorListener={this.validatorListener}
                    />
                    </Grid>

                    <Grid item xs={12} sm={1}></Grid>

                    <Grid item xs={12} sm={2}>
                    <FormLabel component="legend">Celular</FormLabel>
                    <TextValidator 
                    type="text" 
                    placeholder="Celular" 
                    fullWidth   
                    margin="normal" 
                    name="NumeroCelular"  
                    onChange={handleChange()} 
                    value={data.NumeroCelular}
                    validators={['required']}
                    errorMessages={['* obrigatório']}
                    validatorListener={this.validatorListener}
                    />
                    </Grid>

                    <Grid item xs={12} sm={1}></Grid>

                    <Grid item xs={12} sm={2}>
                    <FormLabel component="legend">E-Mail</FormLabel>
                    <TextValidator 
                    type="text" 
                    placeholder="E-Mail"  
                    fullWidth 
                    margin="normal"   
                    name="Email"  
                    onChange={handleChange()} 
                    value={data.Email}
                    validators={['required', 'isEmail']}
                    errorMessages={['* obrigatório', 'E-mail inválido!']}
                    validatorListener={this.validatorListener}
                    />
                    </Grid>

                    <Grid item xs={12} sm={1}></Grid>

                    <Grid item xs={12} sm={2}>
                    <FormLabel component="legend">Status</FormLabel>  
                    <TextValidator  fullWidth    margin="normal" 
                        id="IdStatus"
                        name="IdStatus"
                        select
                        onChange={handleChange()}
                        value={data.IdStatus}                       
                        >
                        {this.state.lstStatus.map(dado => (
                                        <MenuItem  key={dado.value} value={dado.value}> {dado.display}</MenuItem>
                                        ))}
                    </TextValidator>
                    </Grid>

                  <Button
                    color="primary"
                    variant="contained"
                    onClick={this.continue}
                  >
                    Continuar
                  </Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button 
                    variant="contained" 
                    color="default" 
                    onClick={eve => window.location.href='/'}
                  > 
                  Cancelar 
                  </Button>

              </ValidatorForm>

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