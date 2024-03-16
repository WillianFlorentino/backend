import conectar from "./Conexao.js"; //não esquecer de colocar a extensão .js no final
import Evento from "../Modelos/Eventoo.js";
//DAO - Data Access Object
export default class EventooDAO{
    async gravar(evento){
        if (evento instanceof Evento){
            const conexao = await conectar();
            const sql = `INSERT INTO eventoo (cpf, nome, cantor, endereco, bairro,
                         cidade, estado, telefone, idade, valor_ingresso, email) 
                         values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
            const parametros = [
                evento.cpf,
                evento.nome,
                evento.cantor,
                evento.endereco, 
                evento.bairro,
                evento.cidade,
                evento.estado,
                evento.telefone,
                evento.idade,
                evento.valor_ingresso,
                evento.email
            ];
            const [resultados, campos] = await conexao.execute(sql,parametros);
            //funcionalidade interessante oferecida pela biblioteca mysql2
            evento.codigo = resultados.insertId; //recupera o id gerado pelo banco de dados
        }
    }

    async atualizar(evento){
        if (evento instanceof Evento){
            const conexao = await conectar();
            const sql = `UPDATE eventoo SET cpf = ?,
                         nome = ?, cantor = ?, endereco = ?, bairro = ?,
                         cidade = ?, estado = ?, telefone = ?, idade = ?,
                         valor_ingresso = ?, email = ? WHERE id = ?`;
            const parametros = [
                evento.cpf,
                evento.nome,
                evento.cantor,
                evento.endereco,
                evento.bairro,
                evento.cidade,
                evento.estado,
                evento.telefone,
                evento.idade,
                evento.valor_ingresso,
                evento.email,
                evento.codigo
            ];

            await conexao.execute(sql,parametros);
        }
    }

    async excluir(evento){
        if (evento instanceof Evento){
            const conexao = await conectar();
            const sql = `DELETE FROM eventoo WHERE id = ?`;
            const parametros = [
                evento.codigo
            ]
            await conexao.execute(sql,parametros);
        }
    }

    //termo de pesquisa pode ser o código do cliente ou ainda o nome
    
    async consultar(termoDePesquisa){
        if (termoDePesquisa === undefined){
            termoDePesquisa = "";
        }
        let sql="";
        if (isNaN(parseInt(termoDePesquisa))){ //termo de pesquina não é um número
            sql = `SELECT * FROM eventoo WHERE nome LIKE ?`; //like será um parametro
            termoDePesquisa= '%' + termoDePesquisa + '%';
        }
        else{
            sql = `SELECT * FROM eventoo WHERE id = ?`;
        }

        const conexao = await conectar();
        const [registros] = await conexao.execute(sql,[termoDePesquisa]);
        //Utilizar os registros encontrados para criar novos objetos do tipo cliente
        let listaClientes = [];
        for (const registro of registros){
            const evento = new Evento(
                registro.id,
                registro.cpf,
                registro.nome,
                registro.cantor,
                registro.endereco,
                registro.bairro,
                registro.cidade,
                registro.estado,
                registro.telefone,
                registro.idade,
                registro.valor_ingresso,
                registro.email
            );
            listaClientes.push(evento);
        }
        return listaClientes;
    }
}