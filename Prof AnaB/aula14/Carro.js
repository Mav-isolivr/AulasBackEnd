class Carro {
     nome; //publico
     ano;  //publico
     modelo;  //publico
     #chassi;  //privado


    constructor(nome, ano, modelo, chassi){
        this.nome = nome;
        this.ano = ano;
        this.modelo = modelo;
        this.#chassi = chassi;
    }


    definirNomeChassi(chassi){
        this.#chassi = chassi;
    }

    getNomeChassi(){
        return this.#chassi
    }
}

module.exports = Carro;