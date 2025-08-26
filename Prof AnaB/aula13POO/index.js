// Importando um arquivo de classse Pessoa
import Pessoa from "./Pessoa.js"


// Instanciando (inicializando) a classe Pessoa
const pessoa1 = new Pessoa("Mavi", 18, "11203");  // A constante pessoa1 é um objeto
 pessoa1.setNome("Ronaldo");  //definindo o nome
let nomePessoa = pessoa1.getNome(); //Declarei uma variavel chamada pessoa q está recebendo o nome  que eu defini
console.log(nomePessoa); //mostrando no console