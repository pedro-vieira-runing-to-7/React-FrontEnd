import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

class ListPessoaComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pessoas: [],
            message: null
        }
        this.deletePessoa = this.deletePessoa.bind(this);
        this.editPessoa = this.editPessoa.bind(this);
        this.addPessoa = this.addPessoa.bind(this);
        this.reloadPessoaList = this.reloadPessoaList.bind(this);
    }

    componentDidMount() {
        let estados = [ {Sigla: 'SP', Nome: 'São Paulo'}, 
        {Sigla: 'PR', Nome: 'Paraná'}, 
        {Sigla: 'RJ', Nome: 'Rio de Janeiro'},
        {Sigla: 'SC', Nome: 'Santa Catarina'}];
        ApiService.addEstados(estados);

        this.reloadPessoaList();
    }

    reloadPessoaList() {
        ApiService.fetchPessoas()
            .then((res) => {
                this.setState({pessoas: res.data.results})
            });
    }

    deletePessoa(id) {
        ApiService.deletePessoa(id)
           .then(res => {
               this.setState({message : 'Pessoa exlcuída com sucesso.'});
               this.setState({pessoas: this.state.pessoas.filter(pessoa => <pessoa className="pessoaId"></pessoa> !== id)});
           })

           this.props.history.push('/consulta-pessoas');
    }

    editPessoa(Id) {
        window.localStorage.setItem("pessoaId", Id);
        this.props.history.push('/edita-pessoa');
    }

    addPessoa() {
        window.localStorage.removeItem("pessoaId");
        this.props.history.push('/cadastra-pessoa');
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Consulta Pessoas</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Nome</TableCell>
                            <TableCell align="right">Nome Social</TableCell>
                            <TableCell align="right">Tipo</TableCell>
                            <TableCell align="right">Cpf / Cnpj</TableCell>
                            <TableCell align="right">Fone Fixo</TableCell>
                            <TableCell align="right">Celular</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">+</TableCell>
                            <TableCell align="right">-</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.pessoas.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.nome}</TableCell>
                                <TableCell align="right">{row.nomeSocial}</TableCell>
                                <TableCell align="right">{row.idTipoPessoa > 0 ? 'Jurídica' : 'Física'}</TableCell>
                                <TableCell align="right">{row.cpfCnpj}</TableCell>
                                <TableCell align="right">{row.numeroTelefoneFixo}</TableCell>
                                <TableCell align="right">{row.numeroCelular}</TableCell>
                                <TableCell align="right">{row.idStatus > 0 ? row.idStatus === 1 ? 'Ativo' : 'Inativo' : 'Novo'}</TableCell>
                                <TableCell align="right" onClick={() => this.editPessoa(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="right" onClick={() => this.deletePessoa(row.id)}><DeleteIcon /></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        );
    }

}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default ListPessoaComponent;