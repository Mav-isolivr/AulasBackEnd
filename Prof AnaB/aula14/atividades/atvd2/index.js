import Aluno from "./Alunos";

const objAluno = new Aluno;
objAluno.nome = "Mavi"
let nome = objAluno.nome
console.log("O nome do aluno é:", nome)

const objNota = new Aluno;
objNota.setNota(10);
let nota = objNota.getNota();
console.log(nome, "Sua nota é", nota)

