const ContaBancaria = require('./ContaBancaria.js')

let saldoInicial = 1000;
const objConta = new ContaBancaria(saldoInicial);


objConta.depositar(200);
let extrato = objConta.getExtrato();
console.log("Meu saldo é:", extrato);

objConta.sacar(50);

console.log("Meu saldo é:", objConta.getExtrato());