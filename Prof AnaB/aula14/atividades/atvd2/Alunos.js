class Aluno{
    nome;
    #nota;

    constructor(nome, nota){
        this.nome = nome;
        this.#nota = nota;
    }

   setNomeAluno(nome){
    this.nome =  nome;
   }
   getNomeAluno(){
    return this.nome
   }


   setNota(nota){
    this.#nota = nota
   }
   getNota(){
    return this.#nota
   }
}

module.exports = Aluno