import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';


class EditPessoaComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            lstEstados: [],
            lstStatus: [],
            lstTipoPessoa: [],
            lstTipoEndereco: [],
            validationError: "",
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
            NumeroCelular: '',
            EnderecoIdStatus: 0,
            EnderecoIdTipoEndereco: 0,
            EnderecoLogradouro: '',
            EnderecoNumero: '',
            EnderecoBairro: '',
            EnderecoCidade: '',
            EnderecoCep: '',
            EnderecoIdEstado: '',
            Endereco: [],
        }
        this.savePessoa = this.savePessoa.bind(this);
        this.loadPessoa = this.loadPessoa.bind(this);
    }

    componentDidMount() {
        this.loadPessoa();

        const estados = ApiService.getEstados();
        const status = ApiService.getStatus();
        const tipoPessoa = ApiService.getTipoPessoa();
        const tipoEndereco = ApiService.getTipoEndereco();   

        this.setState({ estados, status, tipoPessoa, tipoEndereco  })
    
          let estadosAPI = estados.map(estado => {
            return { value: estado.id, display: estado.nome };
          });
         
          let statusAPI = status.map(st => {
            return { value: st.id, display: st.nome };
          });
          let tipoPessoaAPI = tipoPessoa.map(tipo => {
            return { value: tipo.id, display: tipo.nome };
          });

          let tipoEnderecoAPI = tipoEndereco.map(tipo => {
            return { value: tipo.id, display: tipo.nome };
          });

          this.setState({
            lstEstados: [].concat(estadosAPI), 
            lstStatus: [].concat(statusAPI),
            lstTipoPessoa: [].concat(tipoPessoaAPI),
            lstTipoEndereco: [].concat(tipoEnderecoAPI)
          });
    }

    loadPessoa() {
        ApiService.fetchPessoaById(window.localStorage.getItem("pessoaId"))
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
                    NumeroCelular: pessoa.numeroCelular,
                    EnderecoId: pessoa.endereco[0].id,
                    EnderecoIdStatus: pessoa.endereco[0].idStatus,
                    EnderecoIdTipoEndereco: pessoa.endereco[0].idTipoEndereco,
                    EnderecoLogradouro: pessoa.endereco[0].logradouro,
                    EnderecoNumero: pessoa.endereco[0].numero,
                    EnderecoBairro: pessoa.endereco[0].bairro,
                    EnderecoCidade: pessoa.endereco[0].cidade,
                    EnderecoCep: pessoa.endereco[0].cep,
                    EnderecoIdEstado: pessoa.endereco[0].idEstado                  
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    savePessoa = (e) => {
        e.preventDefault();
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
                this.setState({message : 'Pessoa adicionada com sucesso.'});
                this.props.history.push('/consulta-pessoas');
            });
    }

    render() {
        return (
          <div style={styleDiv}>
          <Typography variant="h4" style={style}>Atualizar Cadastro</Typography>
          <form style={formContainer} >


              <TextField  style={sizemedium}   margin="normal" 
                  id="IdStatus"
                  name="IdStatus"
                  select
                  label="Status"
                  value={this.state.IdStatus} 
                  onChange={this.onChange}
                  >
                  {this.state.lstStatus.map(dado => (
                                  <MenuItem  key={dado.value} value={dado.value}> {dado.display}</MenuItem>
                                  ))}
              </TextField>
         

              <TextField  style={sizemedium}    margin="normal" 
                  id="IdTipoPessoa"
                  name="IdTipoPessoa"
                  select
                  label="Tipo Pessoa"
                  value={this.state.IdTipoPessoa} 
                  onChange={this.onChange}
                  >
                  {this.state.lstTipoPessoa.map(dado => (
                                  <MenuItem  key={dado.value} value={dado.value}> {dado.display}</MenuItem>
                                  ))}
              </TextField>
         

              <TextField type="text" placeholder="Nome" fullWidth margin="normal" name="Nome" value={this.state.Nome} onChange={this.onChange}/>

              <TextField type="text" placeholder="Nome Social" fullWidth margin="normal" name="NomeSocial" value={this.state.NomeSocial} onChange={this.onChange}/>

              <TextField type="text" placeholder="Cpf / Cnpj"  style={sizemedium} margin="normal" name="CpfCnpj" value={this.state.CpfCnpj} onChange={this.onChange}/>

              <TextField type="text" placeholder="Rg / Ie"  style={sizemedium} margin="normal" name="RgIe" value={this.state.RgIe} onChange={this.onChange}/>


              <TextField placeholder="DataNascimentoAbertura" style={sizemedium}  margin="normal"
                id="DataNascimentoAbertura"
                name="DataNascimentoAbertura"
                label="Data Nascimento/ Abertura"
                type="date"
                defaultValue="2020-03-04"
                value={this.state.DataNascimentoAbertura}
                onChange={this.onChange}
               
              />
                            

              <FormControl component="fieldset"  style={sizemedium} >
                <FormLabel component="legend">Gênero</FormLabel>
                <RadioGroup aria-label="position" name="Sexo" value={this.state.Sexo} onChange={this.onChange} row>
                
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


              <TextField type="text" placeholder="E-Mail" fullWidth margin="normal" name="Email" value={this.state.Email} onChange={this.onChange}/>
              
              <TextField type="text" placeholder="Fone Fixo" style={sizemedium} margin="normal" name="NumeroTelefoneFixo" value={this.state.NumeroTelefoneFixo} onChange={this.onChange}/>
              
              <TextField type="text" placeholder="Celular" style={sizemedium} margin="normal" name="NumeroCelular" value={this.state.NumeroCelular} onChange={this.onChange}/>

              <TextField style={sizemedium}  margin="normal" 
                  id="EnderecoIdStatus"
                  name="EnderecoIdStatus"
                  select
                  label="Status"
                  value={this.state.EnderecoIdStatus} 
                  onChange={this.onChange}
                  >
                    {this.state.lstStatus.map(dado => (
                          <MenuItem  key={dado.value} value={dado.value}> {dado.display}</MenuItem>
                          ))}
              </TextField>

              <TextField style={sizemedium}  margin="normal" 
                  id="EnderecoIdTipoEndereco"
                  name="EnderecoIdTipoEndereco"
                  select
                  label="Tipo Endereço"
                  value={this.state.EnderecoIdTipoEndereco} 
                  onChange={this.onChange}
                  >
                    {this.state.lstTipoEndereco.map(dado => (
                          <MenuItem  key={dado.value} value={dado.value}> {dado.display}</MenuItem>
                          ))}
              </TextField>



              <TextField type="text" placeholder="Logradouro" fullWidth margin="normal" name="EnderecoLogradouro" value={this.state.EnderecoLogradouro} onChange={this.onChange}/>
              <TextField type="text" placeholder="Número" style={sizemedium} margin="normal" name="EnderecoNumero" value={this.state.EnderecoNumero} onChange={this.onChange}/>
              <TextField type="text" placeholder="Bairro" style={sizemedium} margin="normal" name="EnderecoBairro" value={this.state.EnderecoBairro} onChange={this.onChange}/>
              <TextField type="text" placeholder="Cidade" style={sizemedium} margin="normal" name="EnderecoCidade" value={this.state.EnderecoCidade} onChange={this.onChange}/>
              <TextField type="text" placeholder="CEP" style={sizemedium} margin="normal" name="EnderecoCep" value={this.state.EnderecoCep} onChange={this.onChange}/>

              <TextField fullWidth margin="normal" 
                  id="EnderecoIdEstado"
                  name="EnderecoIdEstado"
                  select
                  label="Estado"
                  value={this.state.EnderecoIdEstado} 
                  onChange={this.onChange}
                  >
                    {this.state.lstEstados.map(dado => (
                          <MenuItem  key={dado.value} value={dado.value}> {dado.display}</MenuItem>
                          ))}
              </TextField>

              <br/>
              <Button variant="contained" color="primary" onClick={this.savePessoa}>Salvar</Button>
              &nbsp;&nbsp;&nbsp;
              <Button variant="contained" color="default" formNoValidate  onClick={eve => window.location.href='/'}> Cancelar </Button>

              
      </form>
</div>
  );
}
}
const formContainer = {
display: 'flex',
flexFlow: 'row wrap',

};

const style ={
display: 'flex',
justifyContent: 'center'
}


const styleDiv ={
margin: 'auto',
width: '50%',
border: '2px solid #F1F1F1',
padding: '10px'
}

const sizemedium ={
width: '48%',
padding: '5px',
}


export default EditPessoaComponent;