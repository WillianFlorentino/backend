//a rota é uma micro aplicação express encarregada de processar requisições em um determinado endpoint, por exemplo: http://localhost:3000/cliente < cliente é um endpoint(domínio da aplicação)

import { Router } from 'express';
import EventooCtrl from '../Controles/EventooCtrl.js';


const rotaEventoo = new Router();
const cliCtrl = new EventooCtrl();

rotaEventoo
.get('/', cliCtrl.consultar)
.get('/:termo', cliCtrl.consultar) //atribuindo a função consultar como parâmetro do que executar quando receber um método get na rota
.post('/', cliCtrl.gravar)
.put('/:codigo', cliCtrl.atualizar)
.patch('/:codigo', cliCtrl.atualizar)
.delete('/:codigo', cliCtrl.excluir);

export default rotaEventoo;