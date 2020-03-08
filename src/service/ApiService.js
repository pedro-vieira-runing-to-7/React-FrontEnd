import axios from 'axios';

const API_BASE_URL = 'https://localhost:5001/api/v1/';

const ESTADOS = '_ESTADOS';

class ApiService {

    fetchPessoas() {
        return axios.get(API_BASE_URL + 'Pessoas?actualPage=1&pageSize=20');
    }

    fetchPessoaById(id) {
        return axios.get(API_BASE_URL  + 'Pessoas/' + id);
    }

    deletePessoa(id) {
        return axios.delete(API_BASE_URL + 'Pessoas/' + id);
    }

    addPessoa(pessoa) {
        return axios.post(API_BASE_URL + 'Pessoas' , pessoa);
    }

    editPessoa(pessoa) {
        return axios.put(API_BASE_URL + 'Pessoas/' + pessoa.id, pessoa);
    }

    addEstados(estados) {

        axios.get(API_BASE_URL + 'Estados?actualPage=1&pageSize=20')
        .then(res => {
             if (res.data.results.length === 0)
             {
                   window.localStorage.removeItem(ESTADOS);

                    estados.forEach(
                        function iterator( estado ) {
                            axios.post(API_BASE_URL + 'Estados', estado);
                        },
                    );
             }
             else 
             {
                localStorage.setItem(ESTADOS, JSON.stringify(res.data.results)  )
             }
          })
    }

    getEstados = () => {
        const estados = localStorage.getItem(ESTADOS)
        if(!estados){
            return [];
        }
        return JSON.parse(estados)
    }

    getStatus = () => {
        return  [{id: 0, nome: 'Novo'}, {id: 1, nome: 'Ativo'}, {id: 2, nome: 'Inativo'}];
    }

    getTipoPessoa = () => {
        return [{id: 0, nome: 'Física'}, {id: 1, nome: 'Jurídica'}];
    }

    getTipoEndereco = () => {
        return [{id: 0, nome: 'Cobrança'}, {id: 1, nome: 'Entrega'}];
    }
}

export default new ApiService();