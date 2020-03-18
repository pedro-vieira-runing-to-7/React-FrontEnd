## APP REACT JS Consumindo API Restful via Axios
## FSOLID - Cadastro de Pessoas 
Sistema de cadastro de Pessoas que possibilita as seguintes ações:
Cadastro, edição, exclusão e atualização de um cadastro de pessoa com endereço.

## Observações sobre a aplicação:
Todas as depenências são instaladas pelo comando npm install, porém sugiro que use yarn install.

Esta aplicação rodará no seguinte endereço: (http://localhost:3000) e depende de estar rodando a API neste endereço: 
"https://localhost:5001", a qual utiliza EF Core in memory ( Apenas para testes),
portanto os dados só serão mantidos durante o ciclo de vida da aplicação.
Poderá ser consultado os métodos via swagger neste endereço: (https://localhost:5001/swagger/index.html)

## A dependência acima, diz respeito a aplicação a FSOLID_BackEnd

## Tecnologias:
### REACT JS
### A Aplicação consome uma API Restful via Axios
### O design foi feito usando o framework Material-UI
### A validação das informaçães antes de enviar para a API, foi feita usando react-material-ui-form-validator

## TODO: Segregar as ações usando Redux