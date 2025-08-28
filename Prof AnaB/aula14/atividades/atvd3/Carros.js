class Carro {
    ligar;
    frear;
    #velocidade;

    constructor(ligar, frear, velocidade){
        this.ligar = ligar;
        this.frear = frear;
        this.#velocidade = velocidade;
    }

    setLigar(ligar){
        this.ligar = ligar
    }
    getLigar(){
        return this.ligar
    }

    setFrear(frear){
        this.frear = frear;
    }
    getFrear(){
        return this.frear
    }


    
}