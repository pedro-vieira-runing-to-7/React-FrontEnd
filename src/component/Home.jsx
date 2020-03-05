import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
         Seja bem vindo
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Sistema de cadastro de Pessoas que possibilita:    Cadastro, edição, exclusão e atualização de um cadastro de pessoa com endereço.
        </Typography>

        <Typography variant="h5" component="h2">
         Observações sobre a alicação:
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
        Esta  aplicação de depende de estar rodando a API neste endereço: "https://localhost:5001", a qual utiliza EF Core in memory ( Apenas para testes), portanto os dados só serão mantidos durante o ciclo de vida da aplicação.
        <br/>Poderá ser consultado os métodos via swagger neste endereço: (https://localhost:5001/swagger/index.html)
        </Typography>

        <Typography variant="h5" component="h2">
         A dependência acima, diz respeito a aplicação Sage_BackEnd
        </Typography>
      
      </CardContent>
     
    </Card>
  );
}
