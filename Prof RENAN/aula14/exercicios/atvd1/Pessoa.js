// Crie uma classe Pessoa com atributos privados nome e idade, e métodos públicos para acessar e alterar esses valores.

class Pessoa{
    #nome;
    #idade;

    constructor(nome, idade){
        this.#nome = nome;
        this.#idade = idade;
    }

    setAcessarNome(nome){
        this.#nome = nome;
    }
    getNome(){
        this.#nome = nome
    }


    setAcessarIdade(idade){
        this.#idade = idade
    }
    getIdade(){
        this.#idade = idade;
    }
}

module.exports = Pessoa