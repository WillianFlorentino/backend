//todas as linhas desse programa são executadas de forma síncrona, ou seja sequencial.

import Evento from "./Modelos/Eventoo.js";


// const evento = new Evento(10, "101.114.481-78", 
// "Jessica", "Simone", "Rua Pereira", "Jardim Alvorada", "Rancharia", "SP", "(18)99055-5555", "35", "190,00",
// "test@gmail.com.br");

// // console.log(evento.toJSON());


// //nos métodos assíncronos é preciso manipular as promessas (Promises)
// //Então, em algum momento o método trará uma resposta e o nosso programa
// //não saberá quando isso irá acontecer.

// // evento.gravar().then(() =>{
// //     console.log("Evento gravado com sucesso!");
// // }).catch((erro) => {
// //     console.log(erro);
// // });

// //Aqui conseguimos atualizar nosso cliente, identificando pelo id na nossa const, nós podemos escolher qual será atualizado.

// // evento.atualizar().then(() =>{
// //     console.log("Evento atualizado com sucesso!");
// // }).catch((erro) => {
// //     console.log(erro);
// // });

// //Aqui conseguimos excluir nosso cliente, identificando pelo id na nossa const, nós podemos escolher qual será excluído.

// // evento.excluir().then(() =>{
// //     console.log("O cliente foi EXCLUÍDO!");
// // }).catch((erro) => {
// //     console.log(erro);
// // });

// //Consultando o Cliente na nossa tabela

// const clienteQQ = new Evento();

// clienteQQ.consultar("Florinda").then((listaClientes) => {
//     console.log("Clientes encontrados foram:")
//     for (const cliente of listaClientes) {
//         console.log(cliente.toJSON());
//     }
// }).catch((erro) => {
//     console.log("Não foi possível encontrar o cliente.", erro);
// });

import express from "express";
import rotaCliente from "./Rotas/rotaCliente.js";

const host = '0.0.0.0'; //IP GENÉRICO QUE REPRESENTA TODAS AS PLACAS DE REDE.
const porta = 3000; //sempre utilizar portas com valor maior que 1024 valores menores estão reservados para internet.

const app = express();
app.use(express.json()); //configurando o express para saber interpretar o formato JSON.
app.use(express.urlencoded({ extended: true})); //ensinar o express a tirar da url os parâmetros.

app.use('/clientes',rotaCliente);
app.listen(porta, host, () => {
    console.log('Servidor rodando em http://${host}:${porta}');
});