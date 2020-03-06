import React, { Component } from 'react';
import FormDadosPessoa from './FormDadosPessoa';
import FormDadosEndereco from './FormDadosEndereco';
import Confirmar from './FormConfirmar';
import Successo from './Sucesso';

export class StepsCadastro extends Component {
  state = {
            step: 1,
            Id: '',
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
            EnderecoId: '',
            EnderecoIdStatus: 0,
            EnderecoIdTipoEndereco: 0,
            EnderecoLogradouro: '',
            EnderecoNumero: '',
            EnderecoBairro: '',
            EnderecoCidade: '',
            EnderecoCep: '',
            EnderecoIdEstado: '',
            EnderecoNomeEstado: ''
         };

/////////////////////////////////////////////////////////////////////////////////

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { Id,
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
            EnderecoNomeEstado } = this.state;
    const values = { 
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
                      EnderecoNomeEstado 
                 };

    switch (step) {
      case 1:
        return (
          <FormDadosPessoa
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormDadosEndereco
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirmar
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Successo />;
    }
  }
}

export default StepsCadastro;
