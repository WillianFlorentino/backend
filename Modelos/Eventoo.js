
//classe é a abstração de uma entidade do mundo real
//Em orientação a objetos uma classe possui métodos e atributos
//atributos são características de um objeto
//metodos são as ações que um objeto pode executar
import EventooDAO from "../Persistencia/EventooDAO.js";

export default class Eventoo {
    //atributos são privados
    //somente por meio de métodos públicos é que podemos acessar os atributos de uma classe
    //em javascript definimos atributos privados usando #
    #codigo;
    #cpf;
    #nome;
    #cantor;
    #endereco;
    #bairro;
    #cidade;
    #estado;
    #telefone;
    #idade;
    #valor_ingresso;
    #email;

    constructor(codigo=0, cpf="", nome="", cantor="", endereco="", bairro="", cidade="", estado="", telefone="", idade="", valor_ingresso="", email="") {
        this.#codigo = codigo;
        this.#cpf = cpf;
        this.#nome = nome;
        this.#cantor = cantor;
        this.#endereco = endereco;
        this.#bairro = bairro;
        this.#cidade = cidade;
        this.#estado = estado;
        this.#telefone = telefone;
        this.#idade = idade;
        this.#valor_ingresso = valor_ingresso;
        this.#email = email;
    }

    //definir os métodos de acesso ao atributos de um cliente para area de evento
    get codigo(){
        return this.#codigo;
    }    

    set codigo(novoCodigo){
        this.#codigo = novoCodigo;
    }

    get cpf(){
        return this.#cpf;
    }

    set cpf(novoCpf){
        this.#cpf = novoCpf;
    }

    get nome(){
        return this.#nome;
    }

    set nome(novoNome){
        this.#nome = novoNome;
    }

    get cantor(){
        return this.#cantor;
    }

    set cantor(novoCantor){
        this.#cantor = novoCantor;
    }

    get endereco(){
        return this.#endereco;
    }

    set endereco(novoEndereco){
        this.#endereco = novoEndereco;
    }

    get bairro(){
        return this.#bairro;
    }

    set bairro(novoBairro){
        this.#bairro = novoBairro;
    }

    get cidade(){
        return this.#cidade;
    }

    set cidade(novaCidade){
        this.#cidade = novaCidade;
    }

    get estado(){
        return this.#estado;
    }

    set estado(novoEstado){
        this.#estado = novoEstado;
    }

    get telefone(){
        return this.#telefone;
    }

    set telefone(novoTelefone){
        this.#telefone = novoTelefone;
    }

    get idade(){
        return this.#idade;
    }

    set idade(novoIdade){
        this.#idade = novoIdade;
    }

    get valor_ingresso(){
        return this.#valor_ingresso;
    }

    set valor_ingresso(novoValor_ingresso){
        this.#valor_ingresso = novoValor_ingresso;
    }

    get email(){
        return this.#email;
    }

    set email(novoEmail){
        this.#email = novoEmail;
    }

   

    async gravar(){
        const dao = new EventooDAO();
        await dao.gravar(this); //this pode ser compreendido com a seguinte expressão:	"grave a mim mesmo"
    }

    async atualizar(){
        const dao = new EventooDAO();
        await dao.atualizar(this);
    }

    async excluir(){
        const dao = new EventooDAO();
        await dao.excluir(this);
    }

    async consultar(termoDePesquisa){
        const dao = new EventooDAO();
        return await dao.consultar(termoDePesquisa);
    }

  // para representar melhor o objeto cliente na saída do console.
    toString(){
        return `Cliente código: ${this.#codigo} -  nome: ${this.#nome}`;
    }

    toJSON(){
        return {
            "codigo": this.#codigo,
            "cpf": this.#cpf,
            "nome": this.#nome,
            "cantor": this.#cantor,
            "endereco": this.#endereco,
            "bairro": this.#bairro,
            "cidade": this.#cidade,
            "estado": this.#estado,
            "telefone": this.#telefone,
            "idade": this.#idade,
            "valor_ingresso": this.#valor_ingresso,
            "email": this.#email
        }
    }
}