class Pessoa{
    // Atributos da classe Pessoa
    nome;
    carroFavorito;
    dna;
    idade;
    cpf;
    cep;
    peso;


    // Inicializar os meus atributos na minha classe
    constructor (nome, idade, cpf){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }



    // Um metodo/função para definir o nome
    setNome(nome) {
        this.nome = nome
    }
    setCarroFavorito(carroFavorito) {
        this.carroFavorito = carroFavorito
    }
    setDna(dna) {
        this.dna = dna
    }
    setIdade(idade) {
        this.idade = idade
    }
    setCpf(cpf) {
        this.cpf = cpf
    }
    setCep(cep) {
        this.cep = cep
    }
    setPeso(peso) {
        this.peso = peso
    }



// --------------------------- le e dps traz a resposta
    getNome(){
        return this.nome
    }
    getCarroFavorito(){
        return this.carroFavorito
    }
    getDna(){
        return this.dna
    }
    getIdade(){
        return this.idade
    }
    getCpf(){
        return this.cpf
    }
    getCep(){
        return this.cep
    }
    getPeso(){
        return this.peso
    }
}

// Exportando a classe Pessoa
module.exports = Pessoa;