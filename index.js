//todas as linhas desse programa são executadas de forma síncrona, ou seja sequencial.

import Cliente from "./Modelos/Cliente.js";


const cliente = new Cliente(3, "104.147.351-58", 
"Teste", "will", "atualizado", "Por do Sol", "Quatá", "SP", "(18)99254-8214", "21", "17.251.001-9",
"test@gmail.com.br");

// console.log(cliente.toJSON());


//nos métodos assíncronos é preciso manipular as promessas (Promises)
//Então, em algum momento o método trará uma resposta e o nosso programa
//não saberá quando isso irá acontecer.

// cliente.gravar().then(() =>{
//     console.log("Cliente gravado com sucesso!");
// }).catch((erro) => {
//     console.log(erro);
// });

//Aqui conseguimos atualizar nosso cliente, identificando pelo id na nossa const, nós podemos escolher qual será atualizado.

// cliente.atualizar().then(() =>{
//     console.log("Cliente atualizado com sucesso!");
// }).catch((erro) => {
//     console.log(erro);
// });

//Aqui conseguimos excluir nosso cliente, identificando pelo id na nossa const, nós podemos escolher qual será excluído.

// cliente.excluir().then(() =>{
//     console.log("O Cliente foi EXCLUÍDO!");
// }).catch((erro) => {
//     console.log(erro);
// });

//Consultando o Cliente na nossa tabela

const clienteQQ = new Cliente();

clienteQQ.consultar(1).then((listaClientes) => {
    console.log("Clientes encontrados foram:")
    for (const cliente of listaClientes) {
        console.log(cliente.toJSON());
    }
}).catch((erro) => {
    console.log("Não foi possível encontrar o cliente.", erro);
});
