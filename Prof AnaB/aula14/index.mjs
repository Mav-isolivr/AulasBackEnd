// import Carro from "./Carro.js";
// 
// const objCarro = new Carro();
// objCarro.nome = "O nome da menina";
// let nome = objCarro.nome;
// console.log("O nome é: ", nome);
// 
// const objCarro2 = new Carro(); //instanciando minha classe
// objCarro2.definirNomeChassi("123ABC!@"); //definindo o nome do meu chassi
// let chassi = objCarro2.getNomeChassi(); //aqui estou capturando o nome do meu chassi
// console.log(chassi); //mostrando o nome chassi


import ContaBancaria from "./ContaBancaria.js";

let saldoInicial = 100000; //meu saldo
const objConta_bancaria = new ContaBancaria(saldoInicial); //instanciando minha class

//depositando 20 mil reais na minha conta
objConta_bancaria.depositar(20000);
let extrato = objConta_bancaria.getExtrato();
console.log("Meu saldo é:", extrato);

//retirando 5 mil reais na minha conta
objConta_bancaria.sacar(5000);

console.log("Meu saldo é:", objConta_bancaria.getExtrato());

//115 mil reais de resto na conta
