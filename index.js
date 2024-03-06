//todas as linhas desse programa são executadas de forma síncrona, ou seja sequencial.

import Evento from "./Modelos/Eventoo.js";


const evento = new Evento(4, "104.147.351-58", 
"Willian", "Post Malone", "Rua Doflamingopooo", "Por do Sol", "Dressrosa", "SP", "(18)99254-8214", "21", "140,00",
"testwil@gmail.com.br");

// console.log(evento.toJSON());


//nos métodos assíncronos é preciso manipular as promessas (Promises)
//Então, em algum momento o método trará uma resposta e o nosso programa
//não saberá quando isso irá acontecer.

// evento.gravar().then(() =>{
//     console.log("evento gravado com sucesso!");
// }).catch((erro) => {
//     console.log(erro);
// });

//Aqui conseguimos atualizar nosso cliente, identificando pelo id na nossa const, nós podemos escolher qual será atualizado.

// evento.atualizar().then(() =>{
//     console.log("evento atualizado com sucesso!");
// }).catch((erro) => {
//     console.log(erro);
// });

//Aqui conseguimos excluir nosso cliente, identificando pelo id na nossa const, nós podemos escolher qual será excluído.

// evento.excluir().then(() =>{
//     console.log("O cliente foi EXCLUÍDO!");
// }).catch((erro) => {
//     console.log(erro);
// });

//Consultando o Cliente na nossa tabela

// const clienteQQ = new Evento();

// clienteQQ.consultar(1).then((listaClientes) => {
//     console.log("Clientes encontrados foram:")
//     for (const cliente of listaClientes) {
//         console.log(cliente.toJSON());
//     }
// }).catch((erro) => {
//     console.log("Não foi possível encontrar o cliente.", erro);
// });
