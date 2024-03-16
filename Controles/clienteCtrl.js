import Eventoo from "../Modelos/Eventoo.js";


export default class ClienteCtrl{

    //Essa classe terá responsabilidade de traduzir pedidos http em comando internos da aplicação.
    //A minha aplicação sabe gravar, atualizar, excluir e consultar clientes no banco de dados. (Vamos compartilhar essa função na internet).
    //Será necessário manipular requisições http (GET, POST, PUT ou PATCH, DELETE) MÓDULO 1 PROTOCOLO HTTP PARA ESTUDO. 
    //Camada de controle será síncrona, entrão será resolvido os métodos assíncronos (promises ou promesas)

    gravar(requisicao, resposta){
        //preparar método gravar para ter respostas no formato JSON
        resposta.type('application/json');

        //http gravar um cliente é enviar uma requisição do tipo POST, padronizando dados no formato JSON
        if(requisicao.method === "POST" && requisicao.is('application/json')){
            const dados = requisicao.body; //extrair dados do corpo da requisi
            const cpf = dados.cpf;
            const nome = dados.nome;
            const cantor = dados.cantor;
            const endereco = dados.endereco;
            const bairro = dados.bairro;
            const cidade = dados.cidade;
            const estado = dados.estado;
            const telefone = dados.telefone;
            const idade = dados.idade;
            const valor_ingresso = dados.valor_ingresso;
            const email = dados.email;

            //pseudo validação
            if (cpf && nome && cantor && endereco && bairro && cidade && estado && telefone && idade && valor_ingresso && email){
                const cliente = new ClienteCtrl(0, cpf, nome, cantor, endereco, bairro, cidade, estado, telefone, idade, valor_ingresso, email);
                cliente.gravar().then(()=>{  //arrow function ou função anonima
                    resposta.status(201);
                    resposta.json({
                        "status":true,
                        "mensagem": "Cliente gravado com sucesso!",
                        "codigo_cliente": cliente.codigo
                    })
                })
                .catch((erro) =>{
                    resposta.status(500);
                    resposta.json({
                        "status":false,
                        "mensagem": "Não foi possível armazenar o cliente!" + erro.message
                    })
                });
            }
            else{
                resposta.status(400);
                resposta.json({
                    "status":false,
                    "mensagem": "Favor informar todos os dados do cliente, conforme documentação da API"
                });
            }   
      }
      else{
        resposta.status(400);
        resposta.json({
            "status":false,
            "mensagem": "Requisição inválida! Esperando o método POST e dados no formato JSON, para gravar um CLIENTE!"
        })
      }
  }


    atualizar(requisicao, resposta){
        resposta.type('application/json');
        if ((requisicao.method === "PATCH" || requisicao.method === "PUT") && requisicao.is('application/json')){
            const dados = requisicao.body; //extrair dados do corpo da requisi
            const codigo = requisicao.params.codigo; // o código será extraído da url
            const cpf = dados.cpf;
            const nome = dados.nome;
            const cantor = dados.cantor;
            const endereco = dados.endereco;
            const bairro = dados.bairro;
            const cidade = dados.cidade;
            const estado = dados.estado;
            const telefone = dados.telefone;
            const idade = dados.idade;
            const valor_ingresso = dados.valor_ingresso;
            const email = dados.email;
            if (codigo && codigo > 0 && cpf && nome && cantor && endereco && bairro && cidade && estado && telefone && idade && valor_ingresso && email)
            {
                const cliente = new Eventoo(codigo, cpf, nome, cantor, endereco, bairro, cidade, estado, telefone, idade, valor_ingresso, email);
                cliente.atualizar()
                .then(()=>{
                    resposta.status(200);
                    resposta.json({
                        "status":true,
                        "mensagem": "Cliente atualizado com sucesso!!",
                    })
                })
                .catch((erro) =>{
                    resposta.status(500);
                    resposta.json({
                        "status":false,
                        "mensagem": "Não foi possível atualizar o Cliente!!" + erro.message
                    })
                });
            }
            else{
                resposta.status(400);
                resposta.json({
                    "status":false,
                    "mensagem": "Informe todos os dados do cliente, conforme documentação da API"
                })
            }
        }
        else{
            resposta.status(405);
            resposta.json({
                "status":false,
                "mensagem": "Requisição inválida! Esperando o método PATCH"
            })
        }
    }

    excluir(requisicao, resposta){
        resposta.type('application/json');
        if (requisicao.method === "DELETE"){
            //o código do cliente que será excluído será extraído da URL
            const codigo = requisicao.params.codigo;
            if (codigo && codigo > 0){
                const cliente = new Eventoo(codigo);
                cliente.excluir()
                .then(()=>{
                    resposta.status(200);
                    resposta.json({
                        "status":true,
                        "mensagem": "Cliente excluído com sucesso!!",
                    })
                })
                .catch((erro) =>{
                    resposta.status(500);
                    resposta.json({
                        "status":false,
                        "mensagem": "Não foi possível excluir o cliente!!" + erro.message
                    })
                })
            }
            else{
                resposta.status(400);
                resposta.json({
                    "status":false,
                    "mensagem": "Favor informar o código do cliente que deseja excluir conforme documentação da API"
                })
            }
        }
        else{
            resposta.status(405);
            resposta.json({
                "status":false,
                "mensagem": "Requisição inválida. Favor usar o método DELETE para excluir um cliente"
            })
        }
    }

    consultar(requisicao, resposta){
        resposta.type('application/json');
        if (requisicao.method === "GET"){
            const termoDePesquisa = requisicao.params.termo;
            const cliente = new Eventoo(0);
            cliente.consultar(termoDePesquisa)
            .then((clientes)=>{
                resposta.status(200);
                resposta.json(clientes);
            })
            .catch((erro) =>{
                resposta.status(500);
                resposta.json({
                    "status":false,
                    "mensagem": "Não foi possível consultar os clientes" + erro.message
                })
            })
        }
        else{
            resposta.status(405);
            resposta.json({
                "status":false,
                "mensagem": "Requisição inválida. Aguardando método GET para consulta."
            })
        }
    }
 }