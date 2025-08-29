// Crie uma classe Produto com atributos privados nome e preco. Implemente métodos get e set para ambos.

class Produto{
    #nome;
    #preco;

    constructor(nome, preco){
        this.#nome = nome;
        this.#preco = preco
    }


    setNome(nome){
        this.#nome = nome;
    }
    getNome(){
        this.#nome = nome
    }

    setPreco(preco){
        this.#preco = preco;
    }
    getPreco(){
        this.#preco = preco
    }
}
module.exports = Produto